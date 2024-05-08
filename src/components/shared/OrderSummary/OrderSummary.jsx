import React from "react";
import { Box, Divider, Typography } from "@mui/material";

export default function OrderSummary({ title, children }) {
  return (
    <Box
      sx={{
        marginLeft: {
          xs: "20px",
          sm: "0px",
        },
        marginRight: { xs: "20px", sm: "0px" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          marginTop: "30px",
          fontFamily: "Inter",
          fontSize: { xs: "15px", sm: "20px" },
          fontWeight: 600,
          lineHeight: "26px",
          textAlign: "left",
          marginBottom: "10px",
          color: "#13101E",
        }}
      >
        {title}
      </Typography>
      <Divider width={"100%"} />
      {children}
    </Box>
  );
}
