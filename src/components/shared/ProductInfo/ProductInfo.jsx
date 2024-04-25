import { Box, Divider, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import CartItemQuantity from "../CartItemQuantity/CartItemQuantity";
import { useTheme } from "@mui/material/styles";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { useCartContext } from "../../../context/CartContext";

export default function ProductInfo({ product }) {
  const { productID, title, subTitle, price, discount, avgReview, reviewsCount } = product;
  const { addCartItem, openCart, getCartItemQuantity, detectCartItem, removeCartItem } = useCartContext();

  const theme = useTheme();
  return (
    <Box
      sx={{
        [theme.breakpoints.down("sm")]: {
          maxWidth: "400px",
        },
        [theme.breakpoints.up("sm")]: {
          maxWidth: "600px",
        },
        flexGrow: 1,
      }}
    >
      <Typography
        component={"h1"}
        sx={{
          fontWeight: "600",
          fontSize: "34px",
          lineHeight: "44px",
          color: "#13101E",
        }}
      >
        {title}
      </Typography>
      <Typography
        component={"p"}
        sx={{
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "26px",
          color: "#626262",
        }}
      >
        {subTitle}
      </Typography>
      <Stack direction={"row"} alignItems="center" justifyContent="flex-start" margin={"30px 0"}>
        <Rating name="read-only" value={avgReview} readOnly sx={{ color: "#FF8C4B", marginRight: "10px" }} />
        <Typography
          component={"span"}
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#B6B6B6",
          }}
        >{`(${reviewsCount}) Ratings`}</Typography>
      </Stack>
      <Stack direction={"row"} alignItems="center" justifyContent="flex-start">
        {discount ? (
          <>
            <Typography
              component={"h2"}
              sx={{
                fontWeight: "700",
                fontSize: "40px",
                lineHeight: "52px",
                color: "#171520",
                marginRight: "10px",
              }}
            >
              {`$${(price - discount * price).toFixed(2)}`}
            </Typography>
            <>
              <Typography
                component={"h3"}
                sx={{
                  fontWeight: "600",
                  fontSize: "34px",
                  lineHeight: "26px",
                  color: "#B6B6B6",
                  textDecoration: "line-through",
                  marginRight: "10px",
                }}
              >
                {`$${price.toFixed(2)}`}
              </Typography>
              <Typography
                component={"h4"}
                sx={{
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "#FF404B",
                  marginRight: "10px",
                }}
              >
                {`${discount * 100}% OFF`}
              </Typography>
            </>
          </>
        ) : (
          <Typography
            component={"h2"}
            sx={{
              fontWeight: "700",
              fontSize: "40px",
              lineHeight: "52px",
              color: "#171520",
              marginRight: "10px",
            }}
          >
            {`$${price.toFixed(2)}`}
          </Typography>
        )}
      </Stack>
      <Divider
        variant="middle"
        sx={{
          marginBottom: "25px",
          marginTop: "25px",
        }}
      />
      <Stack direction={"row"} alignItems="center" gap={2} sx={{ marginBottom: "50px" }}>
        <Typography
          component={"p"}
          sx={{
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "26px",
            color: "#13101E",
          }}
        >{`Quantity:`}</Typography>
        {detectCartItem(productID) ? (
          <CartItemQuantity itemID={productID} quantity={getCartItemQuantity(productID)} />
        ) : (
          <Typography>Add to bag to set Quantity</Typography>
        )}
      </Stack>

      <Box sx={{ display: "flex" }}>
        {detectCartItem(productID) ? (
          <PrimaryButton
            label={"Remove From bag"}
            icon={"work"}
            onClick={() => {
              removeCartItem(productID);
            }}
          />
        ) : (
          <PrimaryButton
            label={"Add to bag"}
            icon={"work"}
            onClick={() => {
              addCartItem(product);
              openCart();
            }}
          />
        )}
        <SecondaryButton label={"Add To Wishlist"} icon={"favorite"} />
      </Box>
    </Box>
  );
}
