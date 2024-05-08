import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function ImagesStepper({
  images,
  handleBack,
  activeStep,
  handleStepChange,
  handleNext,
  maxSteps,
}) {
  const theme = useTheme();
  // Slice the images array to get exactly 4 images starting from startIdx
  const startIdx = Math.max(activeStep - 3, 0);
  const visibleImages = images.slice(startIdx, startIdx + 4);
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2, alignItems: "center" }}>
      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight sx={{ fontSize: "2.5rem" }} />
        ) : (
          <KeyboardArrowLeft sx={{ fontSize: "2.5rem" }} />
        )}
      </Button>
      <Box sx={{ display: "flex", justifyContent: "center", maxWidth: "200px" }}>
        {visibleImages.map((elm, index) => (
          <Box
            component="img"
            draggable="false"
            key={index}
            src={elm.imgPath}
            alt={elm.label}
            sx={{
              width: "55px",
              height: "55px",
              margin: "5px",
              borderRadius: "8px",
              cursor: "pointer",
              opacity: activeStep === startIdx + index ? 0.5 : 1,
            }}
            onClick={() => handleStepChange(startIdx + index)}
          />
        ))}
      </Box>
      <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft sx={{ fontSize: "2.5rem" }} />
        ) : (
          <KeyboardArrowRight sx={{ fontSize: "2.5rem" }} />
        )}
      </Button>
    </Box>
  );
}
