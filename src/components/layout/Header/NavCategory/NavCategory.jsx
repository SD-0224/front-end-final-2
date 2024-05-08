import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useCategoriesContext } from "../../../../context/CategoriesContext";
import { Link } from "react-router-dom";
import LoadingIndicator from "../../../shared/LoadingIndicator/LoadingIndicator";

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  fontSize: "14px",
  fontWeight: 500,
  font: "500",
  minWidth: "fit-content",
  color: "#626262",
  "& a": {
    textDecoration: "none",
    color: "inherit",
    transition: "color 0.3s",
  },
  "& a:hover": {
    color: theme.palette.primary.main,
  },
}));
export default function NavCategory() {
  const { categories, isLoading } = useCategoriesContext();
  const limitCategories =
    Array.isArray(categories) && categories.length > 5 ? categories.slice(0, 5) : categories;

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>

      <Box
        sx={{
          display: "flex",
          gap: "1.2rem",
          width: "fit-content",
          overflow: "auto",
          text: "black",
          marginLeft: "2rem",
          marginRight: "2rem",
          padding: "0.5rem 0",
        }}
      >
        {Array.isArray(limitCategories) && limitCategories.map((category) => (
          <StyledTypography key={category.categoryID}>
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
          </StyledTypography>
        ))}
      </Box>
    </>
  );
}
