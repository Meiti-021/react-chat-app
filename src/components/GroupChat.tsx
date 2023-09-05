import { Box } from "@mui/material";
import ChatInput from "./ChatInput";
import GroupChatHeader from "./GroupChatHeader";
import ChatBody from "./ChatBody";
import { UserType } from "../utils/users";

const GroupChat = ({
  participants,
  group_name,
  group_profile,
  description,
  chat_id,
}: {
  participants: UserType[];
  group_name: string | null;
  group_profile: string | null;
  description: string | null;
  chat_id: string;
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
      <ChatBody chat_id={chat_id} />
      <ChatInput chat_id={chat_id} />
    </Box>
  );
};

export default GroupChat;
