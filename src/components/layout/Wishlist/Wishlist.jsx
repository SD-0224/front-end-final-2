import React from "react";
import PopUp from "../../shared/Popup/Popup";
import WishlistDataContainer from "../../shared/Popup/WishlistDataContainer";
import { useWishlistContext } from "../../../context/WishlistContext";

export default function Wishlist() {
  const { Wishlist, showWishlist, closeWishlist } = useWishlistContext();
  return (
    <PopUp open={showWishlist} handleClose={closeWishlist} >
      <WishlistDataContainer WishlistData={Wishlist} />
    </PopUp>
  );
}
