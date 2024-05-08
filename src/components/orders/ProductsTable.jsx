import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import CardVertical from "../shared/CardVertical/CardVertical";

const head = ["Product Name", "Price", "Qty", "Subtotal"];

export default function ProductsTable({ data }) {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
      <Table sx={{ minWidth: 600, margin: "0px" }} aria-label="simple table">
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
          {data.map((item, index) => (
            <TableRow
              key={index}
              sx={{
                height: "50px",
                position: "relative",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ border: 0, outline: 0, borderRadius: 0, padding: 0 }}
              >
                <CardVertical item={item}></CardVertical>
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  border: 0,
                  outline: 0,
                  borderRadius: 0,
                  verticalAlign: "center",
                  padding: "0 16px",
                }}
              >
                {`$${item.productPrice}`}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  border: 0,
                  outline: 0,
                  borderRadius: 0,
                  verticalAlign: "center",
                  padding: "0 16px",
                }}
              >
                {item.productQuantity}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  border: 0,
                  outline: 0,
                  borderRadius: 0,
                  verticalAlign: "center",
                  padding: "0 16px",
                }}
              >
                {`$${item.subTotal}`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
