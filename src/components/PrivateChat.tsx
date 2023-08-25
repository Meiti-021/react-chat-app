import { Box } from "@mui/material";
import ChatInput from "./ChatInput";
import PrivateChatHeader from "./PrivateChatHeader";
import ChatBody from "./ChatBody";
import { ChatInfo } from "./Chat";
const PrivateChat = ({ participants, messages }: ChatInfo) => {
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
      <ChatBody messages={messages} />
      <ChatInput />
    </Box>
  );
};

export default PrivateChat;
