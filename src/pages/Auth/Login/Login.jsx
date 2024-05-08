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
import { login } from "../../../components/authentication/services/AuthenticationService";
import { useState, useEffect } from "react";
import { ErrorMessages } from "../../../components/shared/ErrorsMessages/ErrorsMessages";
import LoadingButton from "@mui/lab/LoadingButton";
import { useAuthenticatedUserContext } from "../../../context/AuthenticatedUserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PrimaryButton from "../../../components/shared/PrimaryButton/PrimaryButton";
import { WidthFull } from "@mui/icons-material";
import SecondaryButton from "../../../components/shared/SecondaryButton/SecondaryButton";

const loginValidationSchema = yup
  .object({
    email: yup.string().required("Email is required").email("Enter a valid email"),
    password: yup.string().required("Password is required"),
  })
  .required();

export default function Login() {
  const [backendErrors, setBackendErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setUserData, isAuthenticated } = useAuthenticatedUserContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = async (data) => {
    setLoading(true);
    setBackendErrors([]);
    const { email, password } = data;
    try {
      const result = await login({ email, password });
      setUserData(result.user, result.token);
      toast.success(`Welcome Back ${result.user.firstName} !`);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setBackendErrors(error.response.data.errors || ["Something went wrong"]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
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
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Typography sx={{ mt: 4, textAlign: "center", fontWeight: "500" }}>
            Test User:
            <br />
            Email: test@test.com
            <br />
            Password: Test123456
          </Typography>
          <ErrorMessages errors={backendErrors}></ErrorMessages>

          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
            <TextField
              error={!!errors.email}
              helperText={errors?.email?.message}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register("email")}
            />
            <TextField
              error={!!errors.password}
              helperText={errors?.password?.message}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password")}
            />

            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              loading={loading}
              loadingIndicator="Signing In..."
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </LoadingButton>
            <Link
              to="/auth/signup"
              style={{
                marginTop: "0.2rem",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <SecondaryButton label="Create New Account" />
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
