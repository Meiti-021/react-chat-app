import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { chatFind, userFind } from "../utils/utils";
import { useEffect, useState } from "react";
import GroupChat from "./GroupChat";
import PrivateChat from "./PrivateChat";
import ChatLoading from "./ChatLoading";
import { UserType } from "../utils/users";
import { useDispatch, useSelector } from "react-redux";
export type ChatInfo = {
  peer_private: boolean;
  participants: UserType[];
  group_name: string | null;
  group_profile: string | null;
  chat_id: string;
  description: string | null;
  reply: undefined | string;
};
import { RootState } from "../store";
import { seenMessage } from "../services/chatSlice";
const Chat = () => {
  const { chatID } = useParams();
  const { chats, users } = useSelector((store: RootState) => store.chat);
  const { language } = useSelector((store: RootState) => store.setting);
  const [chatInfo, setChatInfo] = useState<ChatInfo | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setChatInfo(undefined);
    setLoading(true);
  }, [chatID]);
  useEffect(() => {
    setLoading(false);
    const chat = chatFind(chats, chatID);

    if (chat !== undefined) {
      chat.messages.forEach((item) => {
        dispatch(seenMessage({ messageId: item }));
      });
      const participantArr = chat.participants.map((item) => {
        return userFind(users, item);
      });
      const pureParticipants: UserType[] = participantArr.filter(
        (item): item is UserType => {
          return item !== undefined;
        }
      );
      const chatData = {
        peer_private: chat.peer_private,
        participants: pureParticipants,
        group_name: chat.group_name,
        group_profile: chat.group_profile,
        chat_id: chat.chat_id,
        description: chat.description,
        reply: chat.reply,
      };
      setChatInfo(chatData);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, chats]);
  if (chatInfo === undefined) {
    return <ChatLoading />;
  }
  if (chatInfo?.peer_private) {
    return <PrivateChat {...chatInfo} />;
  }
  if (!chatInfo?.peer_private) {
    return <GroupChat {...chatInfo} />;
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
          {language.newMessages}
        </Box>
      </Box>
      {chatID}
    </Box>
  );
};

export default Chat;
