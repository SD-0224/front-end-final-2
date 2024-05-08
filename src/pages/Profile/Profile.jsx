import { Box, Button, Container, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import { capitalizeSlug, extractLastPathname } from "../../utilities/helpers";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useAuthenticatedUserContext } from "../../context/AuthenticatedUserContext";
import { BorderAll, BorderLeft, RoundedCorner } from "@mui/icons-material";

const Profile = () => {
  const { isAuthenticated } = useAuthenticatedUserContext();
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    setTitle(capitalizeSlug(extractLastPathname(window.location.pathname)));
  }, [location.pathname]);

  const breadcrumbList = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "User Profile",
      link: "/profile/personal-information",
    },
    {
      text: title,
    },
  ];
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <Container sx={{ marginTop: "100px", minHeight: "100vh" }}>
      <Breadcrumb list={breadcrumbList} />
      <Typography component="h1" sx={{ color: "primary.main", fontSize: "34px", fontWeight: "600" }}>
        {title ? title : "Profile"}
      </Typography>
      <Box sx={{ display: "flex", marginTop: "1rem", justifyContent: "center", gap: "1rem" }}>
        <List
          sx={{
            minWidth: "268px",
            bgcolor: "#f1f1f1",
            borderRadius: "5px",
            height: "fit-content",
            padding: 0,
          }}
        >
          <ProfileNavListItem
            label="Personal Information"
            path="/profile/personal-information"
            active={title === "Personal Information"}
          />

          <ProfileNavListItem label="My Orders" path="/profile/my-orders" active={title === "My Orders"} />
          <ProfileNavListItem
            label="My Wishlist"
            path="/profile/my-wishlist"
            active={title === "My Wishlist"}
          />
          <ProfileNavListItem
            label="My Address Book"
            path="/profile/my-address-book"
            active={title === "My Address Book"}
          />
          <ProfileNavListItem
            label="Refer and Earn"
            path="/profile/"
            disabled={true}
            active={title === "Refer and Earn"}
          />
          <ProfileNavListItem
            label="My Reviews"
            path="/profile/"
            disabled={true}
            active={title === "My Reviews"}
          />
          <ProfileNavListItem
            label="My Saved Cards"
            path="/profile/"
            disabled={true}
            active={title === "My Saved Cards"}
          />
        </List>
        <Box sx={{ width: "100%" }}>
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;

function ProfileNavListItem({ label, path, active, disabled }) {
  const navigate = useNavigate();

  return (
    <ListItem sx={{ padding: 0 }}>
      <Button
        disabled={disabled}
        onClick={() => {
          navigate(path);
        }}
        sx={{
          RoundedCorner: 0,
          width: "100%",
          height: "54px",
          padding: "10px 20px 10px 10px",
          textTransform: "none",
          margin: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: active ? "primary.main" : "black",
        }}
      >
        <Typography sx={{ borderLeft: active ? 3 : "none", padding: "10px 20px 10px 10px" }}>
          {label}
        </Typography>
        {!disabled && <ArrowForwardIosIcon sx={{ fontSize: "1rem" }} />}
      </Button>
    </ListItem>
  );
}
