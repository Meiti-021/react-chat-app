import { Box } from "@mui/material";
import { ChatType } from "../utils/chats";
import ChatInput from "./ChatInput";
import GroupChatHeader from "./GroupChatHeader";
import ChatBody from "./ChatBody";

const GroupChat = ({
  participants,
  messages,
  group_name,
  group_profile,
}: ChatType) => {
  return (
    <Box
      component={"div"}
      sx={{
        height: "100%",
        overflow: "scroll",
        position: "relative",
        width: "100%",
      }}
    >
      <GroupChatHeader
        participants={participants}
        group_name={group_name}
        group_profile={group_profile}
      />
      <ChatBody messages={messages} />
      <ChatInput />
    </Box>
  );
};

export default GroupChat;
