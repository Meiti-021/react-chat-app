import { Typography, Box } from "@mui/material";
import { MessageType } from "../utils/messages";
import moment from "moment";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { chatFind, messageFind } from "../utils/utils";
const ChatBody = ({ chat_id }: { chat_id: string }) => {
  const { chats, messages } = useSelector((store: RootState) => store.chat);
  const { language } = useSelector((store: RootState) => store.setting);
  const [messagesArray, setMessagesArray] = useState<
    MessageType[] | [] | undefined
  >(undefined);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messagesArray]);
  useEffect(() => {
    const chat = chatFind(chats, chat_id);
    if (chat !== undefined) {
      const messagesArray: (MessageType | undefined)[] | undefined =
        chat?.messages.map((item) => {
          return messageFind(messages, item);
        });
      const pureMessagesArray: MessageType[] = messagesArray.filter(
        (item): item is MessageType => {
          return item !== undefined;
        }
      );
      setMessagesArray(pureMessagesArray);
    }
  }, [messages, chats, chat_id]);
  if (messagesArray === undefined) {
    return (
      <Box
        sx={{
          height: { xs: "calc(100vh - 7rem)", sm: "calc(100vh - 11rem)" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#EAEDF3",
            mt: -5,
          }}
        >
          {language.loading}
        </Typography>
      </Box>
    );
  }
  if (!messagesArray.length) {
    return (
      <Box
        sx={{
          height: { xs: "calc(100vh - 7rem)", sm: "calc(100vh - 11rem)" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            bgcolor: "#1e2933",
            color: "white",
            px: 2,
            py: 1,
            fontSize: "0.8rem",
          }}
        >
          {language.thersNoMessages}
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        height: { xs: "calc(100vh - 7rem)", sm: "calc(100vh - 11rem)" },
      }}
    >
      <div
        style={{ zIndex: "-1", overflowY: "scroll", height: "100%" }}
        ref={messagesEndRef}
      >
        {messagesArray.map((item, index) => {
          if (item !== undefined) {
            return (
              <div key={item.message_id + index} style={{ paddingTop: "10px" }}>
                {item.timestamp.split(" ")[0] !==
                messagesArray[index > 0 ? index - 1 : index].timestamp.split(
                  " "
                )[0] ? (
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                      color: "#2CC641",
                      backgroundColor: "#D3FFD9",
                      paddingY: "5px",
                      paddingX: "15px",
                      width: "5rem",
                      borderRadius: "7px",
                      m: "0 auto",
                    }}
                  >
                    {moment(item.timestamp).format("YY,MM,DD")}
                  </Typography>
                ) : undefined}
                <div>
                  <Message {...item} />
                </div>
              </div>
            );
          }
        })}
      </div>
    </Box>
  );
};

export default ChatBody;
