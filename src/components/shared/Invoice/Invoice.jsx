import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function Invoice({ OrderDetails }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {OrderDetails.map((value, index) => (
        <ListItem key={value} disableGutters sx={{ padding: "0" }}>
          <ListItemText
            primary={`${value.label}`}
            primaryTypographyProps={{
              sx: {
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "20px",
                textAlign: "left",
                color: "#626262",
                marginBottom: '10px',
                ...(index === OrderDetails.length - 1 && {
                  fontWeight: 600,
                  color: "#171520",
                  marginBottom: '0px',
                }),
              },
            }}
          />
          <ListItemText
            primary={`$${value.amount.toFixed(2)}`}
            primaryTypographyProps={{
              sx: {
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "18px",
                color: "#171520",
                marginBottom: '10px',
                ...(index === OrderDetails.length - 1 && {
                  fontWeight: 600,
                  lineHeight: "20px",
                  marginBottom: '0px',
                }),
              },
            }}
            sx={{maxWidth: "fit-content",}}
          />
        </ListItem>
      ))}
    </List>
  );
}
