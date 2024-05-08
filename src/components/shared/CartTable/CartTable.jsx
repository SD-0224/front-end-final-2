import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import CartCardVertical from "../CardVertical/CartCardVertical";

function createData(name, Price, Qty, Subtotal) {
  return { name, Price, Qty, Subtotal };
}
const head = ["Product Name", "Price", "Qty", "Subtotal"];

export default function CartTable({ cart, removeCartItem }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
        maxWidth: "100%",
      }}
    >
      <Table
        sx={{
          minWidth: {
            xs: "100%",
            lg: "600px",
          },
          width: "100%",
          margin: "0px",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {head.map((title, index) =>
              index === 0 ? (
                <TableCell key={index} align="left">
                  {title}
                </TableCell>
              ) : (
                <TableCell key={index} align="right">
                  {title}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item, index) => (
            <TableRow
              key={index}
              sx={{
                height: "80px",
                position: "relative",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ border: 0, outline: 0, borderRadius: 0, verticalAlign: "top" }}
              >
                <CartCardVertical item={item}>
                  <Typography sx={{ color: "#626262" }}>Qty- {item.productQuantity}</Typography>
                </CartCardVertical>
              </TableCell>
              <TableCell align="right" sx={{ border: 0, outline: 0, borderRadius: 0, verticalAlign: "top" }}>
                {item.productPrice}
              </TableCell>
              <TableCell align="right" sx={{ border: 0, outline: 0, borderRadius: 0, verticalAlign: "top" }}>
                {item.productQuantity}
              </TableCell>
              <TableCell align="right" sx={{ border: 0, outline: 0, borderRadius: 0, verticalAlign: "top" }}>
                {item.subTotal}
              </TableCell>
              <RemoveCartItemButton
                onClick={() => {
                  removeCartItem(item.productID);
                }}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const RemoveCartItemButton = ({ onClick }) => (
  <Button
    onClick={onClick}
    variant="text"
    sx={{
      position: "absolute",
      bottom: "2rem",
      right: 0,
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "24px",
      textAlign: "center",
      color: "#B00020",
      textTransform: "none",
      textDecoration: "underLine",
    }}
  >
    Remove
  </Button>
);
