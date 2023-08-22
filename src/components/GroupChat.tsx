import { Box } from "@mui/material";
import ChatInput from "./ChatInput";
import GroupChatHeader from "./GroupChatHeader";
import ChatBody from "./ChatBody";
import { MessageType } from "../utils/messages";
import { UserType } from "../utils/users";

const GroupChat = ({
  participants,
  messages,
  group_name,
  group_profile,
}: {
  participants: UserType[];
  messages: MessageType[];
  group_name: string | null;
  group_profile: string | null;
}) => {
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
