import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Typography, Box, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function CheckoutButtons() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          marginTop: "50px",
          marginBottom: "50px",
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Button>
          <Typography
            sx={{
              color: "primary",
              fontWeight: "600",
              fontSize: "14px",
              textDecoration: "underline",
              marginLeft: "30px",
            }}
            onClick={() => {
              navigate("/mycart");
            }}
          >
            Back to Cart
          </Typography>
        </Button>

        <Box sx={{ marginLeft: "10px" }}>
          <PrimaryButton
            label={"Next"}
            onClick={() => {
              navigate("/");
            }}
          ></PrimaryButton>
        </Box>
      </Box>
    </>
  );
}
