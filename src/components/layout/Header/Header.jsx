import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { Container } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../../assets/HedearLogo/home-logo.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import BurgerMenu from "./Menu/Menu";
import HeaderIcons from "./HeaderIcons/HeaderIcons";
import SearchBar from "./SearchBar/SearchBar";
import NavCategory from "./NavCategory/NavCategory";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  const theme = useTheme();
  const isLargerScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Container>
        <AppBar
          sx={{
            bgcolor: "white",
            margin: "0px",
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              height: "80px",
              alignItems: "center",
              justifyContent: "space-between",
              paddingright: { xs: "5px", md: "0px" },
            }}
          >
            <Link to={"/"}>
              <Box component={"img"} sx={{ width: "108px", height: "40px" }} src={logo} alt="home-logo" />
            </Link>
            {isLargerScreen && (
              <>
                <NavCategory />
                <Box
                  sx={{
                    maxWidth: {
                      xs: "140px",
                      md: "290px",
                      lg: "360px",
                    },
                    marginRight: "1.2rem",
                    marginLeft: "auto",
                  }}
                >
                  <SearchBar />
                </Box>
                <HeaderIcons />
              </>
            )}
            {!isLargerScreen && <BurgerMenu />}
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}
