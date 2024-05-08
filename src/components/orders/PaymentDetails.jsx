import { Box, Typography } from "@mui/material";
import React from "react";

export default function PaymentDetails() {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "20px",
          color: "#626262",
        }}
      >
        Payment Details
      </Typography>
      <Typography
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "block",
          maxWidth: "300px",
          fontFamily: "Inter",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "20px",
          color: "#171520",
          margin: "18px 0",
        }}
      >
        Cash on Delivery
      </Typography>
    </Box>
  );
}
