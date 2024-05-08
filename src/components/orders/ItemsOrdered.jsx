import { Box, Typography } from "@mui/material";
import React from "react";
import Invoice from "../shared/Invoice/Invoice";
import PaymentDetails from "./PaymentDetails";
import OrderSummary from "../shared/OrderSummary/OrderSummary";
import ProductsTable from "./ProductsTable";
import PrimaryButton from "../shared/PrimaryButton/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton/SecondaryButton";
import AddressDetails from "../myAddressBook/AddressDetails";

export default function ItemsOrdered() {
  const invoiceData = [
    { label: "Sub Total", amount: 119.69 },
    { label: "Discount", amount: 13.4 },
    { label: "Delivery Fee", amount: 0.0 },
    { label: "Grand Total", amount: 106.29 },
  ];

  const address = {
    addressID: 1,
    userID: 21,
    street: "123 Main St",
    state: "California",
    city: "Los Angeles",
    postalCode: "90001",
  };

  const products = [
    {
      productID: 3,
      productTitle: "Backpack",
      productSubtitle: "Durable backpack",
      productPrice: 29.99,
      productQuantity: 2,
      subTotal: 50,
      discount: 0.05,
      slug: "backpack",
      brandName: "Fendi",
      "brand-slug": "fendi",
      category: "Skin Care",
      "category-slug": "skin-care",
      avgReview: 4.5,
      reviewCount: 2,
      imgPath:
        "https://algopix.com/products/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31cRtbZrpbL._SL400_.jpg&w=828&q=75",
    },
    {
      productID: 3,
      productTitle: "Backpack",
      productSubtitle: "Durable backpack",
      productPrice: 29.99,
      productQuantity: 2,
      subTotal: 50,
      discount: 0.05,
      slug: "backpack",
      brandName: "Fendi",
      "brand-slug": "fendi",
      category: "Skin Care",
      "category-slug": "skin-care",
      avgReview: 4.5,
      reviewCount: 2,
      imgPath:
        "https://algopix.com/products/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31cRtbZrpbL._SL400_.jpg&w=828&q=75",
    },
  ];

  return (
    <Box>
      <ProductsTable data={products} />
      <OrderSummary title={"Order Information"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            "@media (max-width: 700px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              "@media (max-width: 700px)": {
                marginBottom: "40px",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "20px",
                color: "#626262",
                marginBottom: "-15px",
              }}
            >
              Order Details
            </Typography>
            <Invoice invoiceData={invoiceData} />
          </Box>
          <Box
            sx={{
              "@media (max-width: 700px)": {
                marginBottom: "40px",
              },
            }}
          >
            <PaymentDetails />
          </Box>
          <Box
            sx={{
              "@media (max-width: 700px)": {
                marginBottom: "40px",
              },
            }}
          >
            <AddressDetails address={address} />
          </Box>
        </Box>
      </OrderSummary>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Box sx={{ width: "fit-content" }}>
          <PrimaryButton
            label={"Reorder"}
            icon={""}
          />
          <SecondaryButton
            label={"Add Rating"}
            icon={""}
            style={{ marginRight: 0, padding: "5px 20px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
