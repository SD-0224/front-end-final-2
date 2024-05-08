import { ToastContainer } from "react-toastify";
import { useMediaQuery } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

const ToastContainerCondition = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const toastPosition = isSmallScreen ? "top-center" : "bottom-left";

  return (
    <ToastContainer
      position={toastPosition}
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition:Bounce
    />
  );
};

export default ToastContainerCondition;
