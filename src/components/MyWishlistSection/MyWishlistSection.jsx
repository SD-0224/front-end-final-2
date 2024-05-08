import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CardVertical from "../shared/CardVertical/CardVertical";
import WishlistButton from "../shared/WishlistButton/WishlistButton";
import OrderSummary from "../shared/OrderSummary/OrderSummary";
import { useWishlistContext } from "../../context/WishlistContext";

export default function MyWishlistSection() {
  const { Wishlist } = useWishlistContext();
  return (
    <Container>
      <OrderSummary title={"My Wishlist"}>
        {Wishlist.length === 0 ? (
          <Typography sx={{ padding: "20px", fontSize: "20px" }}>Your wishlist is empty</Typography>
        ) : (
          <Grid container spacing={3} paddingTop={3}>
            {Wishlist.map((item, index) => (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #ececec",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <CardVertical
                    title={item.product.title}
                    subTitle={item.product.subTitle}
                    imgPath={item.imgPath}
                  />
                  <WishlistButton productId={item.productID} />
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </OrderSummary>
    </Container>
  );
}
