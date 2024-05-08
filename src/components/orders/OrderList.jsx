import React from "react";
import OrderListItem from "./OrderListItem";
import { Box, Divider, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export default function OrderList({ orders }) {
  const isLargeScreen = useMediaQuery("(min-width: 960px)");
  const isSmallScreen = useMediaQuery("(max-width: 700px)");

  const paragraph = {
    fontFamily: "Inter",
    fontSize: isSmallScreen ? "13px" : "16px",
    fontWeight: 500,
    lineHeight: "20px",
    textAlign: "left",
    color: "#626262",
  };

  const titles = [
    <>
      {isLargeScreen && "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}Order ID
    </>,
    "Date",
    "Price",
    "Status",
    "",
  ];
  return (
    <Box sx={{ padding: 0 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        {titles.map((item, index) => {
          const style =
            index === 0
              ? { ...paragraph, flex: 1, minWidth: "140px" }
              : index === 1
              ? { ...paragraph, flex: 2 }
              : index === 4
              ? { ...paragraph, width: "24px" }
              : { ...paragraph, flex: 1 };
          return (
            <Typography sx={style} key={index}>
              {item}
            </Typography>
          );
        })}
      </Box>
      <Divider />
      {orders.map((item, index) => (
        <OrderListItem key={index} order={item} />
      ))}
    </Box>
  );
}
