import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export default function OrderListItem({ order }) {
  const isSmallScreen = useMediaQuery("(max-width: 700px)");

  const paragraph = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "block",
    width: "200px",
    whiteSpace: "nowrap",
    fontFamily: "Inter",
    fontSize: isSmallScreen ? "14px" : "16px",
    fontWeight: 500,
    lineHeight: "20px",
    textAlign: "left",
    color: "#171520",
    flex: 1,
  };

  const {
    orderID,
    userID,
    firstName,
    lastName,
    email,
    phoneNumber,
    addressID,
    grandTotal,
    isPaid,
    createdAt,
    updatedAt,
    paymentID,
  } = order;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#F1F1F1",
        height: "58px",
        borderRadius: "10px",
        margin: "17px 0",
        padding: "0 10px",
      }}
    >
      <FormControlLabel
        control={<Checkbox />}
        label={`#${orderID}`}
        sx={{ flex: 1, minWidth: "140px" }}
      />
      <Typography sx={{ ...paragraph, flex: 2 }}>{createdAt}</Typography>
      <Typography sx={paragraph}>{`$${grandTotal}`}</Typography>
      <Typography sx={{ ...paragraph, color: "#1B4B66" }}>Paid</Typography>
      <Link>
        <ArrowForwardIosIcon sx={{ color: "#626262" }} />
      </Link>
    </Box>
  );
}
