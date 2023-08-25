import { Typography, Box } from "@mui/material";
import { MessageType } from "../utils/messages";
import moment from "moment";
import Message from "./Message";
import { useEffect, useRef } from "react";
const ChatBody = ({ messages }: { messages: [string, MessageType[]][] }) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);
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
        {messages.map((item, index) => {
          if (item !== undefined) {
            return (
              <div key={item[0] + index} style={{ paddingTop: "10px" }}>
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
                  {moment(item[0]).format("YY,MM,DD")}
                </Typography>
                <div>
                  {item[1].map((mess) => {
                    return <Message {...mess} key={mess.message_id} />;
                  })}
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
