import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchWishList, toggleWishlistItem } from "../components/wishlist/services/wishlistService";
import { useAuthenticatedUserContext } from "./AuthenticatedUserContext";

// Define the context
const WishlistContext = createContext();

export default function WishlistContextProvider({ children }) {
  const [showWishlist, setShowWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [Wishlist, setWishlist] = useState([]);

  const { isAuthenticated, token } = useAuthenticatedUserContext();

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoading(true);
      fetchWishList(token)
        .then((data) => {
          setWishlist(data.userWishList);
        })
        .catch((error) => {
          console.error("Failed to fetch Wishlist:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isAuthenticated, showWishlist]);

  // Function to toggle visibility of Wishlist
  const toggleShowWishlist = () => {
    setShowWishlist((prevShowWishlist) => !prevShowWishlist);
  };
  const openWishlist = () => {
    setShowWishlist(true);
  };
  const closeWishlist = () => {
    setShowWishlist(false);
  };

  // Function to add or remove an item from Wishlist
  const toggleWishlist = async (productId) => {
    try {
      const updatedWishlist = await toggleWishlistItem(productId, token);
      fetchWishList(token).then((data) => {
        setWishlist(data.userWishList);
      });
    } catch (error) {
      console.error("Failed to toggle Wishlist item:", error);
    }
  };

  const isProductInWishlist = (productID) => {
    if (Wishlist && Wishlist.length > 0) {
      for (const item of Wishlist) {
        if (item.product.productID === productID) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    <WishlistContext.Provider
      value={{
        Wishlist,
        showWishlist,
        toggleShowWishlist,
        toggleWishlist,
        closeWishlist,
        openWishlist,
        isProductInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

// Custom hook to access the Wishlist context
export const useWishlistContext = () => {
  return useContext(WishlistContext);
};
