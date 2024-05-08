import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { useSprings, animated } from "react-spring";
import Box from "@mui/material/Box";
import ImagesStepper from "../ImagesStepper/ImagesStepper";

function SwipeableGallery({ images }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const [springProps, set] = useSprings(images.length, (index) => ({
    display: index === 0 ? "block" : "none",
  }));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1));
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  React.useEffect(() => {
    set((index) => ({
      x: (index - activeStep) * 100,
      display: index === activeStep ? "block" : "none",
    }));
  }, [activeStep, set]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          flexGrow: 1,
        }}
      >
        {springProps.map(({ display }, index) => (
          <animated.img
            key={index}
            src={images[index].imgPath}
            alt={images[index].label}
            style={{
              display,
              overflow: "hidden",
              borderRadius: "16px",
              objectFit: "cover",
              width: "100%",
              margin: "0 auto",
              height: "450px",
              maxWidth: "450px",
            }}
            draggable="false"
          />
        ))}
        <ImagesStepper
          images={images}
          handleBack={handleBack}
          activeStep={activeStep}
          handleStepChange={handleStepChange}
          handleNext={handleNext}
          maxSteps={maxSteps}
        />
      </Box>
    </Box>
  );
}

export default SwipeableGallery;
