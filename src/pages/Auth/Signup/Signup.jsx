import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Copyright from "../../../components/authentication/components/Copyright";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signup } from "../../../components/authentication/services/AuthenticationService";
import { useState, useEffect } from "react";
import { ErrorMessages } from "../../../components/shared/ErrorsMessages/ErrorsMessages";
import LoadingButton from "@mui/lab/LoadingButton";
import { useAuthenticatedUserContext } from "../../../context/AuthenticatedUserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SecondaryButton from "../../../components/shared/SecondaryButton/SecondaryButton";

const signupValidationSchema = yup
  .object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    email: yup.string().required("Email is required").email("Enter a valid email"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

export default function SignUp() {
  const [backendErrors, setBackendErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setUserData, isAuthenticated } = useAuthenticatedUserContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupValidationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setBackendErrors([]);
    const { firstName, lastName, phoneNumber, email, password, confirmPassword } = data;

    try {
      const result = await signup({ firstName, lastName, phoneNumber, email, password, confirmPassword });
      setUserData(result.user, result.token);
      toast.success(`Registration Successful. Welcome ${result.user.firstName} !`);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setBackendErrors(error.response.data.errors || ["Something went wrong"]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ marginBottom: "10px" }}>
            Sign Up
          </Typography>

          <ErrorMessages errors={backendErrors}></ErrorMessages>

          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!!errors.firstName}
                  helperText={errors?.firstName?.message}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register("firstName")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!!errors.lastName}
                  helperText={errors?.lastName?.message}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  {...register("lastName")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!errors.phoneNumber}
                  helperText={errors?.phoneNumber?.message}
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  {...register("phoneNumber")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register("email")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!errors.confirmPassword}
                  helperText={errors?.confirmPassword?.message}
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirm-password"
                  {...register("confirmPassword")}
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              loading={loading}
              loadingIndicator="Registering..."
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </LoadingButton>
            <Link
              to="/auth/login"
              style={{
                marginTop: "0.2rem",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <SecondaryButton label="Go to Sign In Page" />
            </Link>
            <Grid container justifyContent={"flex-end"}>
              <Grid item>
                <Link to={"/"} variant="body2">
                  <Typography sx={{ marginTop: "0.5rem" }}>
                    Want to browse our store? Go to homepage
                  </Typography>
                </Link>
              </Grid>
            </Grid>

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
