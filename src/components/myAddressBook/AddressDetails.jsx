import { Padding } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function AddressDetails({ address }) {
  const { street, state, city, postalCode } = address;

  const paragraph = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "block",
    maxWidth: "300px",
    whiteSpace: "nowrap",
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "20px",
    textAlign: "left",
    color: "#171520",
    padding: "10px 0 0",
  };

  return (
    <Box>
      <Typography sx={{ ...paragraph, color: "#626262" }}>Address Details</Typography>
      <Typography sx={{ ...paragraph }}>{street}</Typography>
      <Typography sx={{ ...paragraph }}>{state}</Typography>
      <Typography sx={{ ...paragraph }}>{city}</Typography>
      <Typography sx={{ ...paragraph }}>{postalCode}</Typography>
    </Box>
  );
}
