import { Padding } from "@mui/icons-material";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { Stack, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MyCartButtons() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          marginTop: "80px",
          marginBottom: "20px",
          width: "100%",
          display: "flex",
          gap: "1rem",
        }}
      >
        <PrimaryButton
          label={"Place Order"}
          onClick={() => {
            navigate("/checkout");
          }}
        />

        <SecondaryButton
          label={"Continue Shopping"}
          onClick={() => {
            navigate("/");
          }}
        />
      </Box>
    </>
  );
}
