import { styled } from "@mui/material/styles";
import bag from "../../../../assets/HedearLogo/bag.svg";
import wishlist from "../../../../assets/HedearLogo/wishlist.svg";
import profile from "../../../../assets/HedearLogo/profile.svg";
import IconButton from "@mui/material/IconButton";
import { useWishlistContext } from "../../../../context/WishlistContext";
import { useCartContext } from "../../../../context/CartContext";
import { useUserPopupContext } from "../../../../context/UserPopupContext";
import { useAuthenticatedUserContext } from "../../../../context/AuthenticatedUserContext";
import { Box } from "@mui/material";

const HeaderIconsRaber = styled("div")(() => ({
  display: "flex",
}));

const StyledIconButton = styled(IconButton)(() => ({
  padding: "5px",
  margin: "5px",
}));

export default function HeaderIcons() {
  const { toggleShowWishlist } = useWishlistContext();
  const { toggleCart } = useCartContext();
  const { toggleUserPopup } = useUserPopupContext();
  const { isAuthenticated } = useAuthenticatedUserContext();

  return (
    <>
      <HeaderIconsRaber>
        <StyledIconButton onClick={toggleShowWishlist} disabled={!isAuthenticated}>
          <Box component={"img"} src={wishlist} alt="wishlist-logo" />
        </StyledIconButton>
        <StyledIconButton onClick={toggleUserPopup}>
          <Box component={"img"} src={profile} alt="profile-logo" />
        </StyledIconButton>
        <StyledIconButton onClick={toggleCart}>
          <Box component={"img"} src={bag} alt="bag-logo" />
        </StyledIconButton>
      </HeaderIconsRaber>
    </>
  );
}
