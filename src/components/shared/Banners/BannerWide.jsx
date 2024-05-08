import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function BannerWide({ img, text, textPosition, color, type, link, children }) {
  return (
    <Link to={link}>
      <Box
        display="flex"
        position="relative"
        sx={{
          borderRadius: "15px",
          cursor: "pointer",
          overflow: "hidden",

          // Adjust height based on screen size
          height: {
            xs: type === "wide" ? 200 : 150,
            sm: type === "wide" ? 200 : 150,
            md: type === "wide" ? 300 : 200,
          },
          "&::after": {
            position: "absolute",
            display: "block",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            content: '""',
            backgroundColor: "rgba(255, 255, 255, .25)",
            opacity: "0",
            transition: "opacity .2s ease-in-out",
          },
          "&:hover": {
            "&::after": { opacity: "0.5", zIndex: "1" },
          },
        }}
      >
        <Box
          component="img"
          src={img}
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
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            zIndex: 1,
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
          <Typography
            component="span" // Use span instead of paragraph
            sx={{
              color: color,
              fontFamily: "Inter",
              fontSize: { xs: "18px", sm: "24px", md: "32px" }, // Adjust font size based on screen size
              fontWeight: "800",
            }}
          >
            {text}
          </Typography>
          {children}
        </Box>
      </Box>
    </Link>
  );
}
