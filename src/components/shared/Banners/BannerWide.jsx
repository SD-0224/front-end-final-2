import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function BannerWide({
  img,
  text,
  subText,
  type,
  textPosition,
  color,
}) {
  return (
    <Link to="/">
      <Box
        width={"100%"}
        mx="auto" // Center align the box horizontally
        display="flex"
        alignItems="center"
        position="relative"
        sx={{
          borderRadius: "15px",
          cursor: "pointer",
          overflow: "hidden",
          // Adjust height based on screen size
          ...(type === "wide" && { height: { xs: 200, sm: 200, md: 300 } }),
          ...(type === "short" && { height: { xs: 150, sm: 150, md: 200 } }),
        }}
      >
        <img
          src={`${img}`}
          alt={"Card 2: 15% off and more!"}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            zIndex: 1,
            color: color,
            fontFamily: "Inter",
            fontSize: { xs: "18px", sm: "24px", md: "32px" }, // Adjust font size based on screen size
            fontWeight: "800",
            borderRadius: "15px", // Add border radius to match the box
            transform: "translate(0, -50%)", // Center align vertically
            // Adjust max width based on screen size
            ...(type === "wide" && {
              maxWidth: { xs: "70%", sm: "50%", md: "40%" },
            }),
            ...(type === "short" && {
              maxWidth: { xs: "90%", sm: "90%", md: "60%" },
            }),
            ...(textPosition === "left" && { left: "5%", textAlign: "left" }), // Position left
            ...(textPosition === "right" && {
              right: "5%",
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }),
          }}
        >
          {text}
          {type === "wide" ? (
            <Typography
              sx={{
                bgcolor: "#FFDD9D",
                width: "fit-content",
                padding: "5px 10px",
                borderRadius: "6px",
                marginTop: "20px",
              }}
            >
              {subText}
            </Typography>
          ) : (
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "rgba(23, 73, 77, 0.16)",
                width: "fit-content",
                padding: "5px",
                borderRadius: "50%",
                marginTop: "20px",
              }}
            >
              <ArrowForwardIcon />
            </Typography>
          )}
        </Typography>
      </Box>
    </Link>
  );
}