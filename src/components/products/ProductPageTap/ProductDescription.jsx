import { Typography } from "@mui/material";
import React from "react";

export default function ProductDescription({ description }) {
  return <Typography sx={{ whiteSpace: "pre-wrap", fontSize: "16px" }}>{description}</Typography>;
}
