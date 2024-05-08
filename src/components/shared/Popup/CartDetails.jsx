import * as React from "react";
import CartItemQuantity from "../CartItemQuantity/CartItemQuantity";
import { Box } from "@mui/material";
import CartCardVertical from "../CardVertical/CartCardVertical";

export default function CartDetails({ item }) {
  return (
    <>
      <Box>
        <CartCardVertical item={item}>
          <CartItemQuantity sx={{ margin: "0px" }} itemID={item.productID} quantity={item.productQuantity} />
        </CartCardVertical>
      </Box>
    </>
  );
}
