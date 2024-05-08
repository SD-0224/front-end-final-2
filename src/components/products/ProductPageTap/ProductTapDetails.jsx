import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RelatedProduct from "../ProductPageTap/RelatedProduct";
import { styled } from "@mui/material/styles";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
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
const CustomTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    display: "none",
  },
  ".css-jpln7h-MuiTabs-scroller": {
    marginBottom: "-12px !important",
    marginTop: "-12px !important",
  },
});

//custome style for the 3 tab
const tabStyles = {
  color: "#626262",
  fontSize: "16px",
  fontWeight: "500",
  textTransform: "none",
  marginRight: "30px",
  marginLeft: "30px",
  marginTop: "18px",
  marginBottom: "18px",
  borderRadius: "10px",
  "&.Mui-selected": {
    backgroundColor: "#1B4B66",
    color: "white",
  },
  "@media (max-width: 700px)": {
    padding: "1px 2px",
    marginRight: "5px",
    marginLeft: "5px",
    fontSize: "14px",
    fontWeight: "400",
  },
};

export default function BasicTabs({ description, relatedProducts }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <CustomTabs
          sx={{
            backgroundColor: "#F1F1F1",
            borderRadius: "10px",
            "@media (max-width: 700px)": {
              borderRadius: "10px",
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              ...tabStyles,
            }}
            label="Product Description"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              ...tabStyles,
            }}
            label="Related Products"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              ...tabStyles,
            }}
            label="Ratings and Reviews"
            {...a11yProps(2)}
          />
        </CustomTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography sx={{ whiteSpace: "pre-wrap", fontSize: "1rem" }}>{description}</Typography>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <RelatedProduct products={relatedProducts} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography sx={{ whiteSpace: "pre-wrap", fontSize: "16px" }}>Coming Soon ...</Typography>
      </CustomTabPanel>
    </Box>
  );
}
