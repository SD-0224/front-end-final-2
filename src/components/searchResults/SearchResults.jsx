import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchPath } from "../../utilities/fetch";
import { environment } from "../../utilities/environment";
import ProductGrid from "../products/components/ProductGrid";
import ProductBrands from "../products/components/ProductBrands";
import { Box, Container, Divider, Typography } from "@mui/material";
import TitleBanner from "../shared/CateogryTitleBanner/TitleBanner";
import LoadingIndicator from "../shared/LoadingIndicator/LoadingIndicator";
import Breadcrumb from "../shared/Breadcrumb/Breadcrumb";
import theme from "../../theme";

function SearchResults() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const searchQuery = new URLSearchParams(location.search).get("search");
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  let breadcrumbList = [];

  useEffect(() => {
    setLoading(true);
    fetchPath(
      `${environment.baseUrl}/products/search/?page=1&limit=5&search=${searchQuery}`
    ).then((data) => {
      setLoading(false);
      setSearchResults(data.paginatedResult);

      const products = data.paginatedResult.filter((item) => item.productID);
      const brands = data.paginatedResult.filter((item) => !item.productID);
      setProducts(products);
      setBrands(brands);
    });
  }, [searchQuery]);

  breadcrumbList = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "search",
    },
  ];

  return (
    <Container sx={{ minHeight: "100vh" }}>
      <Box sx={{ width: "100%", marginTop: "5rem" }}>
        <TitleBanner />
      </Box>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <Box
            sx={{
              mt: "3rem",
              width: "100%",
              display: "flex",
              gap: "1rem",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Box>
              <Breadcrumb list={breadcrumbList} />
              <h2>Search</h2>
            </Box>
            <Box sx={{ width: "100%" }}>
              {products.length > 0 ? (
                <ProductGrid products={products} />
              ) : (
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: "center",
                    fontSize: "30px",
                    color: theme.palette.primary.main,
                  }}
                >
                  No products found
                </Typography>
              )}
              {brands.length > 0 ? (
                <Box sx={{ margin: "150px 0" }}>
                  <Divider sx={{ margin: "20px 0" }} />
                  <ProductBrands brands={brands} />
                </Box>
              ) : null}
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
}

export default SearchResults;
