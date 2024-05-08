import { Box, Grid, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import LoadingButton from "@mui/lab/LoadingButton";
import { ErrorMessages } from "../../../shared/ErrorsMessages/ErrorsMessages";

const updateProfileValidationSchema = yup
  .object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    email: yup.string().required("Email is required").email("Enter a valid email"),
    dateOfBirth: yup.string(),
  })
  .required();

const UserDetailsForm = ({ onSubmit, loading, backendErrors, userData }) => {
  const [dateOfBirth, setDateOfBirth] = useState(dayjs(userData?.dateOfBirth || "2024-01-01"));

  const handleDateOfBirthChange = (newDate) => {
    if (newDate) {
      const formattedDate = dayjs(newDate).format("YYYY-MM-DD");
      setValue("dateOfBirth", formattedDate);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(updateProfileValidationSchema),
    defaultValues: {
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
      phoneNumber: userData?.phoneNumber || "",
      email: userData?.email || "",
      dateOfBirth: userData?.dateOfBirth || "",
    },
  });

  return (
    <>
      <ErrorMessages errors={backendErrors}></ErrorMessages>

      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight={"500"} gutterBottom>
              First Name
            </Typography>
            <TextField
              error={!!errors.firstName}
              helperText={errors?.firstName?.message}
              size="small"
              variant="filled"
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              sx={{
                "& .MuiInputBase-input ": {
                  padding: "16px  12px 16px 16px",
                },
              }}
              {...register("firstName")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight={"500"} gutterBottom>
              Last Name
            </Typography>
            <TextField
              error={!!errors.lastName}
              helperText={errors?.lastName?.message}
              size="small"
              variant="filled"
              required
              fullWidth
              id="lastName"
              sx={{
                "& .MuiInputBase-input ": {
                  padding: "16px  12px 16px 16px",
                },
              }}
              autoComplete="family-name"
              {...register("lastName")}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" fontWeight={"500"} gutterBottom>
              Email
            </Typography>
            <TextField
              error={!!errors.email}
              helperText={errors?.email?.message}
              size="small"
              variant="filled"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              {...register("email")}
              sx={{
                "& .MuiInputBase-input ": {
                  padding: "16px  12px 16px 16px",
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight={"500"} gutterBottom>
              Phone Number
            </Typography>
            <TextField
              error={!!errors.phoneNumber}
              helperText={errors?.phoneNumber?.message}
              size="small"
              variant="filled"
              required
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              autoComplete="phoneNumber"
              {...register("phoneNumber")}
              sx={{
                "& .MuiInputBase-input ": {
                  padding: "16px  12px 16px 16px",
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Typography variant="body1" fontWeight={"500"} gutterBottom>
                Date Of Birth
              </Typography>
              <DatePicker
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={handleDateOfBirthChange}
                slotProps={{
                  textField: {
                    size: "small",
                    variant: "filled",
                    fullWidth: true,
                    sx: {
                      "& .MuiInputBase-input ": {
                        padding: "16px  12px 16px 16px",
                      },
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "end" }}>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            loading={loading}
            loadingIndicator="Updating..."
            sx={{ mt: 3, mb: 2, maxWidth: "200px" }}
          >
            Update
          </LoadingButton>
        </Grid>
      </Box>
    </>
  );
};

export default UserDetailsForm;
