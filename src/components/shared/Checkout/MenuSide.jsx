import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Typography, Divider, Box } from "@mui/material";

export default function MenuSide({ title, children }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box sx={{ marginTop: "50px", marginLeft: "20px" }}>
        <ListItemButton onClick={handleClick}>
          <ListItemText>
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ fontSize: { xs: "12px", sm: "16px" } }}
            >
              {title}
            </Typography>
          </ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider sx={{ width: "96%", marginLeft: "2%", marginRight: "2%" }} />
        <Collapse sx={{}} in={open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      </Box>
    </>
  );
}
