import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState, useEffect } from "react";
import home from "../../../assets/bottomNavIcons/home.svg";
import homeGray from "../../../assets/bottomNavIcons/home-gray.svg";
import categories from "../../../assets/bottomNavIcons/categories.svg";
import categoriesGray from "../../../assets/bottomNavIcons/categories-gray.svg";
import wishlist from "../../../assets/HedearLogo/wishlist.svg";
import wishlistGray from "../../../assets/bottomNavIcons/wishlist.svg";
import profile from "../../../assets/bottomNavIcons/profile.svg";
import profileGray from "../../../assets/bottomNavIcons/profile-gray.svg";
import bag from "../../../assets/bottomNavIcons/bag.svg";
import bagGray from "../../../assets/bottomNavIcons/bag-gray.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useWishlistContext } from "../../../context/WishlistContext";
import { useCartContext } from "../../../context/CartContext";
import { useUserPopupContext } from "../../../context/UserPopupContext";
import { useAuthenticatedUserContext } from "../../../context/AuthenticatedUserContext";

const NavItemWrapper = styled(Box)(({ theme }) => ({
  position: "relative",

  "&:hover .label": {
    visibility: "visible",
  },
}));

const Label = styled(Typography)({
  position: "absolute",
  bottom: "-25px",
  left: "50%",
  transform: "translateX(-50%)",
  // visibility: "hidden",
  transition: "visibility 0.3s ease",
  marginBottom: "10px",
  color: "#1B4B66",
  fontWeight: "500",
});

const NavItem = ({ iconSrcGray, iconSrcBlack, label, onClick, isActive, isCartToggled }) => {
  return (
    <NavItemWrapper>
      <IconButton onClick={onClick}>
        <img src={isActive || isCartToggled ? iconSrcBlack : iconSrcGray} alt={label} />
      </IconButton>
      <Label className="label" variant="caption" fontSize="12px">
        {label}
      </Label>
    </NavItemWrapper>
  );
};

export default function BottomNavBox() {
  const { toggleShowWishlist } = useWishlistContext();
  const { toggleCart } = useCartContext();
  const { toggleUserPopup } = useUserPopupContext();
  const { isAuthenticated } = useAuthenticatedUserContext();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          bgcolor: "white",
          bottom: "0",
          position: "fixed",
          width: "100%",
          height: "80px",
          zIndex: 1000,
        }}
      >
        <NavItem
          iconSrcGray={homeGray}
          iconSrcBlack={home}
          label="Home"
          route="/"
          isActive={location.pathname === "/"} // Check if it's the active route
          onClick={() => {
            navigate("/");
          }}
        />

        <NavItem
          iconSrcGray={categoriesGray}
          iconSrcBlack={categories}
          label="Categories"
          route="/category/handbags"
          isActive={location.pathname === "/category/handbags"}
          onClick={() => {
            navigate("/category/handbags");
          }}
        />
        <NavItem
          iconSrcGray={wishlistGray}
          iconSrcBlack={wishlist}
          label="Wishlist"
          IconButton
          //wating tell the wishlist page compleate
          isActive={location.pathname === ""}
          onClick={toggleShowWishlist}
          disabled={!isAuthenticated}
        />
        <NavItem
          iconSrcGray={profileGray}
          iconSrcBlack={profile}
          label="Profile"
          //wating tell the Profile page compleate
          isActive={location.pathname === ""}
          onClick={toggleUserPopup}
        />
        <NavItem
          iconSrcGray={bagGray}
          iconSrcBlack={bag}
          label="Bag"
          isActive={location.pathname === "/mycart"}
          onClick={toggleCart}
        />
      </Box>
    </>
  );
}
