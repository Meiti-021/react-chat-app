import { Box } from "@mui/material";
import ChatInput from "./ChatInput";
import PrivateChatHeader from "./PrivateChatHeader";
import ChatBody from "./ChatBody";
import { ChatInfo } from "./Chat";
const PrivateChat = ({ participants, chat_id, reply }: ChatInfo) => {
  return (
    <Box
      component={"div"}
      sx={{
        height: "calc(100vh - 4.5rem)",
        position: "relative",
        width: "100%",
      }}
    >
      <PrivateChatHeader user={participants[1]} />
      <ChatBody chat_id={chat_id} />
      <ChatInput chat_id={chat_id} reply={reply} />
    </Box>
  );
};

export default PrivateChat;
