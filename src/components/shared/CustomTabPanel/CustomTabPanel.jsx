import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

export function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: "18px 0" }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomTabs = {
  "& .MuiTabs-indicator": {
    display: "none",
  },
  ".css-heg063-MuiTabs-flexContainer": {
    alignItems: "center",
    height: "100%",
  },
  backgroundColor: "#F1F1F1",
  borderRadius: "10px",
  "@media (max-width: 700px)": {
    borderRadius: "10px",
  },
};
//custom style for the 3 tab
const tabStyles = {
  color: "#626262",
  fontSize: "16px",
  fontWeight: "500",
  textTransform: "none",
  padding: "6px 18px",
  borderRadius: "10px",
  minHeight: "auto",
  margin: "0 15px",
  "&.Mui-selected": {
    backgroundColor: "#1B4B66",
    color: "white",
  },
  "@media (max-width: 700px)": {
    marginRight: "5px",
    marginLeft: "5px",
    fontSize: "12px",
    fontWeight: "400",
  },
};

function BasicTabs({ tabs }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs sx={{ ...CustomTabs }} value={value} onChange={handleChange} aria-label="basic tabs">
          {tabs.map((tab, index) => (
            <Tab sx={{ ...tabStyles }} label={tab.label} key={index} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel value={value} index={index} key={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}

BasicTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default BasicTabs;
