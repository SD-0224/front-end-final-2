import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardVertical from "../CardVertical/CardVertical";
import WishlistButton from "../WishlistButton/WishlistButton";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useWishlistContext } from "../../../context/WishlistContext";

export default function WishlistDataContainer() {
  const { Wishlist, showWishlist } = useWishlistContext();
  const [filteredWishlist, setFilteredWishlist] = useState([]);

  useEffect(() => {
    setFilteredWishlist(Wishlist);
  }, [showWishlist]);

  const removeFromWishlist = (productId) => {
    setFilteredWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.product.productID !== productId)
    );
  };

  if (filteredWishlist.length === 0) {
    return (
      <Typography
        variant="subtitle1"
        sx={{
          padding: "20px 0px",
          textAlign: "center",
          fontSize: "24px",
          color: "textSecondary",
        }}
      >
        Your wishlist is empty
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box>
        {Array.isArray(filteredWishlist) &&
          filteredWishlist.map((item, index) => (
            <Box key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CardVertical
                  title={item.product.title}
                  subTitle={item.product.subTitle}
                  imgPath={item.imgPath}
                />
                <WishlistButton
                  productId={item.product.productID}
                  onRemove={() => removeFromWishlist(item.product.productID)}
                />
              </Box>
              <Divider />
            </Box>
          ))}
      </Box>
      <PrimaryButton
        label={"Show All"}
        icon={""}
      />
    </Box>
  );
}
