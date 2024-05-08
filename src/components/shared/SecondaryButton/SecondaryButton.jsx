import React from "react";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";


const SecondaryButton = ({ label, icon, onClick, style }) => {
  return (
    <Button
      sx={{
        backgroundColor: "#fff",
        color: "primary.main",
        flexGrow: 1,
        borderRadius: "8px",
        border: `1px solid`,
        minWidth: "fit-content",
        height: "44px",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "#fff",
        },
        textTransform: "none",
        fontSize: "1rem",
      }}
      variant="contained"
      startIcon={
        icon ? (
          <Icon sx={{ fontSize: "1rem !important" }}>{icon}</Icon>
        ) : undefined
      }
      onClick={onClick}
      style={style}
    >
      {label}
    </Button>
  );
};

export default SecondaryButton;
