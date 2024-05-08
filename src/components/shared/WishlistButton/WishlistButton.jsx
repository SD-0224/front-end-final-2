import React from "react";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import theme from "../../../theme";
import { useWishlistContext } from "../../../context/WishlistContext";
import { useAuthenticatedUserContext } from "../../../context/AuthenticatedUserContext";
import { Link } from "react-router-dom";

const CustomIconButton = styled(IconButton)(() => ({
  width: "40px",
  height: "40px",
}));

const WishlistButton = ({ productId }) => {
  const { toggleWishlist, Wishlist } = useWishlistContext();
  const { isAuthenticated } = useAuthenticatedUserContext();

  // Check if the product is in the wishlist
  const isInWishlist = Wishlist.some((item) => item.productID === productId);
  // Toggle wishlist state
  const handleToggleWishlist = () => {
    toggleWishlist(productId);
  };

  if (!isAuthenticated) {
    return (
      <Link to={"/auth/login"}>
        <FavoriteBorderOutlinedIcon
          sx={{ color: theme.palette.primary.main }}
        />
      </Link>
    );
  }

  return (
    <IconButton disabled={!isAuthenticated} onClick={handleToggleWishlist}>
      {isInWishlist ? (
        <FavoriteIcon sx={{ color: theme.palette.primary.main }} />
      ) : (
        <FavoriteBorderOutlinedIcon
          sx={{ color: theme.palette.primary.main }}
        />
      )}
    </IconButton>
  );
};

export default WishlistButton;
