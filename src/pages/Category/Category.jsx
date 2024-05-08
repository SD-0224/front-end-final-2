import { useEffect } from "react";
import { useState } from "react";
import { fetchProductsByCategorySlug } from "../../components/products/services/ProductsService";
import { Container, Box, Typography } from "@mui/material";
import ProductGrid from "../../components/products/components/ProductGrid";
import AppPagination from "../../components/shared/AppPagination/AppPagination";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../../components/shared/LoadingIndicator/LoadingIndicator";
import { Grid } from "@mui/material";
import { capitalizeSlug } from "../../utilities/helpers";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import TitleBanner from "../../components/shared/CateogryTitleBanner/TitleBanner";

const Category = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [productsResult, setProductsResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  let breadcrumbList = [];

  useEffect(() => {
    setLoading(true);
    fetchProductsByCategorySlug(slug, currentPage, pageSize)
      .then((data) => {
        setLoading(false);
        setProductsResult(data);
      })
      .catch((error) => console.error("Failed to load products:", error));
  }, [currentPage, slug]);

  breadcrumbList = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: capitalizeSlug(slug),
    },
  ];

  return (
    <>
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
                <h2>{capitalizeSlug(slug)}</h2>
              </Box>
              <Box sx={{ width: "100%" }}>
                <ProductGrid products={productsResult.products} />
              </Box>
            </Box>

            {productsResult.count > 0 ? (
              <AppPagination
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                count={productsResult.count}
                pageSize={pageSize}
              />
            ) : (
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                No products found
              </Typography>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Category;
