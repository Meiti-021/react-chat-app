import { Box } from "@mui/material";
import Lottie from "lottie-react";
import ChatAnimation from "../assets/help.json";
const HelpAnimation = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 1,
      }}
    >
      <Box
        component={"div"}
        sx={{
          width: { xs: 400, md: 600 },
          height: { xs: 300, md: 500 },
          mt: 10,
        }}
      >
        <Lottie animationData={ChatAnimation} loop={true} />
      </Box>
    </Box>
  );
};

export default HelpAnimation;
