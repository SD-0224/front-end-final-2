import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Box sx={{ position: "relative", width: "100%", height: "400px" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            component={"img"}
            src={image}
            alt={`Slide ${index}`}
            sx={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "24px" }}
            key={index}
          />
        ))}
      </Slider>
      <Box
        sx={{
          position: "absolute",
          top: "42px",
          right: 0,
          textAlign: "left",
          width: {
            xs: "100%",
            sm: "100%",
            md: "760px",
          },
          height: "316px",
          backgroundColor: "rgba(222, 222, 222, 0.7)",
          padding: "1rem",
          boxSizing: "border-box",
          borderTopLeftRadius: {
            sm: 0,
            md: "24px",
          },
          borderBottomLeftRadius: {
            sm: 0,
            md: "24px",
          },
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            px: "42px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <Typography
              type={"h2"}
              sx={{
                fontSize: {
                  xs: "40px",
                  sm: "40px",
                  md: "60px",
                },
                fontWeight: 800,
                color: "primary.main",
                margin: 0,
              }}
            >
              Carry your Funk
            </Typography>
            <Typography
              type={"p"}
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "24px",
                  md: "28px",
                },
                lineHeight: "38px",
                fontWeight: 500,
                color: "primary.main",
                margin: 0,
                maxWidth: "27ch",
              }}
            >
              Trendy handbags collection for your party animal
            </Typography>
          </Box>
          <Link to={"/category/handbags"}>
            <PrimaryButton label={"See more"} icon={"east"} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageCarousel;
