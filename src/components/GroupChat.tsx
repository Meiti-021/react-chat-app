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
  description,
}: {
  participants: UserType[];
  messages: [string, MessageType[]][];
  group_name: string | null;
  group_profile: string | null;
  description: string | null;
}) => {
  return (
    <Box
      component={"div"}
      sx={{
        height: "calc(100vh - 4.5rem)",
        position: "relative",
        width: "100%",
      }}
    >
      <GroupChatHeader
        participants={participants}
        group_name={group_name}
        group_profile={group_profile}
        description={description}
      />
      <ChatBody messages={messages} />
      <ChatInput />
    </Box>
  );
};

export default GroupChat;
