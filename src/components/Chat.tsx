import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { chatFind } from "../utils/utils";
import { useEffect, useState } from "react";
import { ChatType } from "../utils/chats";

const Chat = () => {
  const { chatID } = useParams();
  const [chatInfo, setChatInfo] = useState<ChatType | undefined>(undefined);
  useEffect(() => {
    setChatInfo(chatFind(chatID));
  }, [chatID]);
  if (chatInfo === undefined) {
    return <>loading</>;
  }
  if (chatInfo?.peer_private) {
    return <>private</>;
  }
  if (!chatInfo?.peer_private) {
    return <>group</>;
  }
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        height: "100%",
        overflow: "scroll",
      }}
    >
      <Box
        component={"div"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "2rem",
          borderBottom: "1px solid #EAEDF3",
          height: "3.5rem",
        }}
      >
        <Typography sx={{ fontSize: "0.9rem" }}>hi</Typography>
        <Box
          sx={{
            fontSize: "0.7rem",
            fontWeight: "bold",
            color: "#2CC641",
            backgroundColor: "#D3FFD9",
            paddingY: "5px",
            paddingX: "15px",
            borderRadius: "5px",
          }}
        >
          NEW MESSAGES
        </Box>
      </Box>
      {chatID}
    </Box>
  );
};

export default Chat;
