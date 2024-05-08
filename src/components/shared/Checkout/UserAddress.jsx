import * as React from "react";
import MenuSide from "./MenuSide";
import { Box, TextField, Grid, Typography } from "@mui/material";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Controller } from "react-hook-form";

const CustomTextField = ({ label, ...props }) => {
  return (
    <TextField
      variant="filled"
      required
      sx={{
        width: "92%",
        "& .MuiFilledInput-underline:before": {
          borderBottom: "none",
        },
      }}
      label={label}
      {...props}
    />
  );
};

const StyledTypography = ({ children, ...props }) => {
  return (
    <Typography
      sx={{
        fontWeight: "500",
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default function UserAddress({ onFormChange }) {
  const { control, watch } = useForm({
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      street: '',
      state: '',
      city: '',
      postalCode: ''
    }
  });

  const formValues = watch();

  useEffect(() => {
    onFormChange(formValues);
  }, [formValues, onFormChange]);



  return (
    <>
      <MenuSide title={"Add New Address"}>
        <Box component="form" sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            {/* First Row */}
            <Grid item xs={12} sm={6}>
              <Box>
                <StyledTypography variant="subtitle1">Full name</StyledTypography>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Enter Name"
                      variant="filled"
                      fullWidth
                      sx={{
                        "& .MuiFilledInput-underline:before": {
                          borderBottom: "none",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <StyledTypography variant="subtitle1">Mobile Number</StyledTypography>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Enter Mobile Number"
                      variant="filled"
                      fullWidth
                      sx={{
                        "& .MuiFilledInput-underline:before": {
                          borderBottom: "none",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>

            {/* Second Row */}
            <Grid item xs={12} sm={6}>
              <Box>
                <StyledTypography variant="subtitle1">Street Address</StyledTypography>
                <Controller
                  name="street"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Enter Street Address"
                      variant="filled"
                      fullWidth
                      sx={{
                        "& .MuiFilledInput-underline:before": {
                          borderBottom: "none",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <StyledTypography variant="subtitle1">State</StyledTypography>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Enter State"
                      variant="filled"
                      fullWidth
                      sx={{
                        "& .MuiFilledInput-underline:before": {
                          borderBottom: "none",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>

            {/* Third Row */}
            <Grid item xs={12} sm={6}>
              <Box>
                <StyledTypography variant="subtitle1">City</StyledTypography>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Enter City"
                      variant="filled"
                      fullWidth
                      sx={{
                        "& .MuiFilledInput-underline:before": {
                          borderBottom: "none",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <StyledTypography variant="subtitle1">Pin Code</StyledTypography>
                <Controller
                  name="postalCode"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Enter Pin Code"
                      variant="filled"
                      fullWidth
                      sx={{
                        "& .MuiFilledInput-underline:before": {
                          borderBottom: "none",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>
            <Box
              sx={{
                display: "flex",
                marginTop: "20px",
                marginLeft: "20px",
                width: "20%",
              }}
            >
              {/* <PrimaryButton type={"submit"} label={"Submit"} /> */}
            </Box>
          </Grid>
        </Box>
      </MenuSide>
    </>
  );
}
