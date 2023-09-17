import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import ChatAnimation from "../assets/chat-animation.json";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const SelectChat = () => {
  const { darkmode } = useSelector((store: RootState) => store.setting);
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
        gap: "1rem",
        p: 1,
      }}
    >
      <Box
        component={"div"}
        sx={{
          width: { xs: 400, md: 600 },
          height: { xs: 300, md: 500 },
          mt: -10,
        }}
      >
        <Lottie animationData={ChatAnimation} loop={true} />
      </Box>
      <Typography
        sx={{
          fontWeight: "bold",
          color: darkmode ? "white" : "#1e2933",
          fontSize: { xs: "1rem", md: " 1.5rem" },
          fontFamily: "Public Sans",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Welcome to my chat app react project
      </Typography>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "0.8rem", md: " 1.2rem" },
          fontFamily: "Public Sans",
          textAlign: "center",
          textTransform: "capitalize",
          color: "#7a7f9a",
        }}
      >
        please select a chat or start a new conversations.
      </Typography>
    </Box>
  );
};

export default SelectChat;
