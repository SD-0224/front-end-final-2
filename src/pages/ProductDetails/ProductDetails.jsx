import { Box, CircularProgress, Container } from "@mui/material";
import React, { useEffect } from "react";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import { useState } from "react";
import { fetchPath } from "../../utilities/fetch";
import SwipeableGallery from "../../components/shared/SwipeableGallery/SwipeableGallery";
import ProductInfo from "../../components/shared/ProductInfo/ProductInfo";
import ProductTapDetails from "../../components/products/ProductPageTap/ProductTapDetails";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetchPath(`https://backend-final-2-1.onrender.com/products/${slug}`).then((data) => {
      setProduct(data.product);
    });
  }, [slug]);

  useEffect(() => {
    if (!product) return;
    fetchPath(
      `https://backend-final-2-1.onrender.com/products/related?brand=${product["brand-slug"]}&category=${product.category}`
    ).then(
      (data) => {
        setRelatedProducts(data.products);
      },
      [product]
    );

    //for breadcrumbList Possible useMemo if calculations get expensive
    breadcrumbList = [
      {
        text: "Home",
        link: "/",
      },
      {
        text: product.category,
        link: product["category-slug"],
      },
      {
        text: product.title,
        link: product.slug,
      },
    ];
  }, [product]);

  let breadcrumbList = [
    {
      text: "Home",
      link: "/",
    },
  ];

  if (product) {
    breadcrumbList = [
      {
        text: "Home",
        link: "/",
      },
      {
        text: product.category,
        link: product["category-slug"],
      },
      {
        text: product.title,
      },
    ];
  }

  if (!product) {
    return (
      <Container
        sx={{ minHeight: "100svh", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem", margin: "7rem 0" }}>
          <Box>
            <Breadcrumb list={breadcrumbList} />
            <Box sx={{ display: "flex", gap: "3rem" }}>
              <SwipeableGallery
                images={product.images.map((image) => {
                  return { label: product.title, imgPath: image.imgPath };
                })}
              />
              <ProductInfo product={product} />
            </Box>
          </Box>
          <ProductTapDetails description={product.description} relatedProducts={relatedProducts} />
        </Box>
      </Container>
    </>
  );
};

export default ProductDetails;