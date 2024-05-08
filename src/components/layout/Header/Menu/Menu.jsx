import { IoMdMenu } from "react-icons/io";
import * as React from "react";
import { Menu, Button } from "@mui/material";
import Fade from "@mui/material/Fade";
import SearchBar from "../SearchBar/SearchBar";
import { FaRegRectangleXmark } from "react-icons/fa6";
import { Box } from "@mui/system";
import MenuCategories from "./MenuCategories";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <IoMdMenu size={35} color="#1B4B66" />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          style: {
            width: "450px",
            height: "800px",
          },
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "end", marginRight: "10px" }}
        >
          <FaRegRectangleXmark onClick={handleClose} />
        </Box>
        <Box
          sx={{ marginLeft: "10px", marginRight: "20px", marginTop: "20px" }}
        >
          <SearchBar />
        </Box>
        <MenuCategories />
      </Menu>
    </>
  );
}
