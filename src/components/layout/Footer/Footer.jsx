import React from "react";
import QuickLinks from "./QuickLinks.jsx";
import { Stack, Grid, useTheme, useMediaQuery } from "@mui/material";
import Logos from "./Logos.jsx";
import FooterInfoStack from "./FooterInfoStack.jsx";
import DividerStack from "./DividerStack.jsx";
import { useCategoriesContext } from "../../../context/CategoriesContext";

export default function Footer() {
  const { categories } = useCategoriesContext();
  const categoryMenuItems = Array.isArray(categories)
    ? categories.map((category) => ({
        text: category.name,
        path: `/category/${category.slug}`,
      }))
    : [];

  const productsMenuItems = [
    { text: "Featured", path: "" },
    { text: "Brands", path: "" },
    { text: "Trendy", path: "" },
  ];

  const aboutMenuItems = [
    { text: "Contact Us", path: "" },
    { text: "About Us", path: "/about" },
    { text: "Careers", path: "" },
    { text: "Press", path: "" },
  ];

  const policyMenuItems = [
    { text: "Return Policy", path: "" },
    { text: "Terms of Use", path: "" },
    { text: "Sitemap", path: "" },
    { text: "Security", path: "" },
    { text: "Privacy", path: "" },
    { text: "EPR Compliance", path: "" },
  ];

  // Check if the screen is small
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        bgcolor: "#1b4b66",
        color: "#B6B6B6",
        [theme.breakpoints.down("sm")]: {
          padding: "32px 15px 74px",
        },
        [theme.breakpoints.up("sm")]: {
          padding: "32px 60px 74px",
        },
      }}
      direction={"row"}
    >
      <Grid item xs={12} md={9} padding={0}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={{ sm: 2, md: 1 }}>
          <QuickLinks listHeader={"Shop by Category"} menuItems={categoryMenuItems} />
          <QuickLinks listHeader={"Shop by products"} menuItems={productsMenuItems} />
          {isSmallScreen ? (
            <>
              <DividerStack listHeader={"Policy"} menuItems={policyMenuItems} isSmallScreen={isSmallScreen} />
              <DividerStack listHeader={"About"} menuItems={aboutMenuItems} isSmallScreen={isSmallScreen} />
            </>
          ) : (
            <>
              <DividerStack listHeader={"About"} menuItems={aboutMenuItems} isSmallScreen={isSmallScreen} />
              <DividerStack listHeader={"Policy"} menuItems={policyMenuItems} isSmallScreen={isSmallScreen} />
            </>
          )}
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        container
        direction="column"
        justifyContent="space-evenly"
        sx={{
          maxHeight: "220px",
          [theme.breakpoints.down("sm")]: {
            alignItems: "flex-start",
            paddingTop: "30px",
            marginTop: "30px",
            borderTop: "1px solid #3E6F73",
          },
          [theme.breakpoints.up("sm")]: {
            alignItems: "flex-end",
          },
        }}
      >
        {/* logos component: four icons with avatar */}
        <Logos />
        {/* footer info component to show location */}
        <FooterInfoStack />
      </Grid>
    </Grid>
  );
}
