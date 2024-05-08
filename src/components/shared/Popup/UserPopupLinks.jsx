import React from "react";
import { Stack, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAuthenticatedUserContext } from "../../../context/AuthenticatedUserContext";
import { useUserPopupContext } from "../../../context/UserPopupContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UserPopupLinks() {
  const { isAuthenticated, logoutUser } = useAuthenticatedUserContext();
  const { closeUserPopup } = useUserPopupContext();
  const navigate = useNavigate();

  const onClickLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logout successful.");
      closeUserPopup();
      navigate("/auth/login");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Stack sx={{ listStyleType: "none", padding: "0px", margin: "0px" }}>
        {!isAuthenticated && (
          <>
            <Link
              component={RouterLink}
              to="/auth/login"
              onClick={() => closeUserPopup()}
              sx={{
                textDecoration: "none ",
                paddingBlock: "10px",
                ":hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              Login
            </Link>
            <Link
              component={RouterLink}
              to="/auth/signup"
              onClick={() => closeUserPopup()}
              sx={{
                textDecoration: "none ",
                paddingBlock: "10px",
                ":hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              Signup
            </Link>
          </>
        )}

        {isAuthenticated && (
          <>
            <Link
              component={RouterLink}
              to="/profile/personal-information"
              sx={{
                textDecoration: "none ",
                paddingBlock: "10px",
                ":hover": { backgroundColor: "#f5f5f5" },
              }}
              onClick={() => closeUserPopup()}
            >
              Profile{" "}
            </Link>
            <Link
              onClick={() => onClickLogout()}
              sx={{
                textDecoration: "none ",
                paddingBlock: "10px",
                ":hover": { backgroundColor: "#f5f5f5", cursor: "pointer" },
              }}
            >
              Logout
            </Link>
          </>
        )}
      </Stack>
    </>
  );
}
