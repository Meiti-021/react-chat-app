import { Box } from "@mui/material";
import ChatCall from "./ChatCall";
import ChatNotification from "./ChatNotification";
import ChatSetting from "./ChatSetting";
const ChatOptions = ({
  participants,
  group_name,
}: {
  participants: string[];
  group_name: string | null;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        borderLeft: "1px solid #d0d2d6",
        paddingLeft: "1rem",
        marginLeft: "0.5rem",
        alignItems: "center",
      }}
    >
      <ChatCall participants={participants} group_name={group_name} />
      <ChatNotification />
      <ChatSetting />
    </Box>
  );
};

export default ChatOptions;
