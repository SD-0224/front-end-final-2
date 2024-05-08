import Box from "@mui/material/Box";
import bannerimg from "../../../assets/TiltleBannerImg/title-banner.svg";

export default function TitleBanner() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          component="img"
          src={bannerimg}
          alt="Hero"
          style={{ minHeight: "200px", width: "100%", objectFit: "cover", borderRadius: "8px" }}
        />
      </Box>
    </>
  );
}
