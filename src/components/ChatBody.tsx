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
  const [messagesArray, setMessagesArray] = useState<MessageType[] | []>([]);
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
  return (
    <Box
      sx={{
        height: { xs: "calc(100vh - 7.5rem)", sm: "calc(100vh - 11.5rem)" },
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
