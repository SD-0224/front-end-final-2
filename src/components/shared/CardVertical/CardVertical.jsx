import { Box, Typography } from "@mui/material";
import React from "react";

export default function CardVertical({ title, subTitle, imgPath, children }) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "20px 0",
      }}
    >
      <Box sx={{ objectFit: "cover", Width: "75px", height: "75px" }} component="img" src={imgPath} />
      <Box sx={{ paddingLeft: "20px" }}>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "20px",
            textAlign: "left",
            color: "#171520",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20px",
            textAlign: "left",
            color: "#626262",
          }}
        >
          {subTitle}
        </Typography>
        {children}
      </Box>
    </Box>
  );
}