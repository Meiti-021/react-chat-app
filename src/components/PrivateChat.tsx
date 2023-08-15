import { Box } from "@mui/material";
import { ChatType } from "../utils/chats";
import ChatInput from "./ChatInput";
import PrivateChatHeader from "./PrivateChatHeader";
import { useState, useEffect } from "react";
import { userFind } from "../utils/utils";
import { UserType } from "../utils/users";
const PrivateChat = ({ participants, messages }: ChatType) => {
  const [user, setUser] = useState<UserType | undefined>(undefined);
  useEffect(() => {
    const data = userFind(participants[1]);
    setUser(data);
  }, [participants]);
  if (user !== undefined) {
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
        <PrivateChatHeader participants={participants} user={user} />
        <ChatInput />
      </Box>
    );
  }
  return <>HI</>;
};

export default PrivateChat;
