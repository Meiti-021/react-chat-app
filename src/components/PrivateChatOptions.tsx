import { Box } from "@mui/material";
import ChatNotification from "./ChatNotification";
import { UserType } from "../utils/users";
import PrivateChatCall from "./PrivateChatCall";
import PrivateChatSetting from "./PrivateChatSetting";
const PrivateChatOptions = ({ user }: { user: UserType }) => {
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
      <PrivateChatCall user={user} />
      <ChatNotification />
      <PrivateChatSetting />
    </Box>
  );
};

export default PrivateChatOptions;
