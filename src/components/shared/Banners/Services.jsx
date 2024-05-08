import React from "react";
import BannerWide from "./BannerWide.jsx";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

export default function Services() {
  return (
    <Container>
      <Grid container rowSpacing={2} columnSpacing={2} my={1}>
        <Grid item xs={12}>
          <BannerWide
            img={`/images/servicebanner1.png`}
            text={`Discount Bonanza: Enjoy 15% Off and Beyond!`}
            type="wide"
            textPosition="left"
            color={"#97451f"}
            link={"/products/list/discount"}
          >
            <Box
              sx={{
                bgcolor: "#d4b098",
                color: "#97451f",
                width: "fit-content",
                padding: "5px 10px",
                borderRadius: "6px",
                marginTop: "20px",
              }}
            >
              {`UPTO 15% OFF`}
            </Box>
          </BannerWide>
        </Grid>
        <Grid item xs={6}>
          <BannerWide
            img={`/images/servicebanner2.png`}
            text={`limited edition products`}
            type="short"
            textPosition="right"
            color="#a53f64"
            link={"/products/list/limited"}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#f1f1f1",
                color: "#a53f64",
                width: "fit-content",
                padding: "5px",
                borderRadius: "50%",
                marginTop: "20px",
              }}
            >
              <ArrowForwardIcon fontSize="large" />
            </Box>
          </BannerWide>
        </Grid>
        <Grid item xs={6}>
          <BannerWide
            img={`/images/servicebanner3.png`}
            text={`Popular in the community!`}
            type="short"
            textPosition="right"
            color={"#1B4B66"}
            link={"/products/list/trendy"}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "rgba(23, 73, 77, 0.16)",
                color: "#1B4B66",
                width: "fit-content",
                padding: "5px",
                borderRadius: "50%",
                marginTop: "20px",
              }}
            >
              <ArrowForwardIcon fontSize="large" />
            </Box>
          </BannerWide>
        </Grid>
      </Grid>
    </Container>
  );
}
