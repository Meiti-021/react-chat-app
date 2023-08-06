import { Box, Typography } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
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
      <MessageIcon sx={{ color: "#00b718", fontSize: "9rem" }} />
      <Typography
        sx={{ fontWeight: "bold", color: "#1e2933", fontSize: "1.5rem" }}
      >
        PLEASE SELECT A CHAT TO PREVIEW CONVERSATIONS
      </Typography>
    </Box>
  );
};

export default SelectChat;
