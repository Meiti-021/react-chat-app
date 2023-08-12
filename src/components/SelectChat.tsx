import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import ChatAnimation from "../assets/chat-animation.json";
const SelectChat = () => {
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
      }}
    >
      <Box component={"div"} sx={{ width: 600, height: 600, mt: -10 }}>
        <Lottie animationData={ChatAnimation} loop={true} />
      </Box>
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#1e2933",
          fontSize: "1.5rem",
          fontFamily: "Public Sans",
          textAlign: "center",
          textTransform: "capitalize",
        }}
      >
        Wellcome to my chat app react project
      </Typography>
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#1e2933",
          fontSize: "1rem",
          fontFamily: "Public Sans",
          textAlign: "center",
          textTransform: "capitalize",
        }}
      >
        please select a chat or start a new conversations.
      </Typography>
    </Box>
  );
};

export default SelectChat;
