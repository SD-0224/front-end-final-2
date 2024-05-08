import { Box, Typography } from "@mui/material";
import React from "react";
export default function CartCardVertical({ item, children }) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "20px 0",
      }}
    >
      <Box sx={{ objectFit: "cover", width: "75px", height: "75px" }} component="img" src={item.imgPath} />
      <Box sx={{ paddingLeft: "20px" }}>
        <Typography>{item.productTitle}</Typography>
        <Typography sx={{ color: "#626262" }}>{item.productSubtitle}</Typography>
        {children}
      </Box>
    </Box>
  );
}
