import { Box, Typography } from "@mui/material";
import { MessageType } from "../utils/messages";
import moment from "moment";
import Message from "./Message";
const ChatBody = ({ messages }: { messages: [string, MessageType[]][] }) => {
  return (
    <Box
      component={"div"}
      sx={{
        height: "calc(100% - 7.5rem)",
      }}
    >
      {messages.map((item, index) => {
        if (item !== undefined) {
          return (
            <Box key={item[0] + index} sx={{ paddingTop: "10px" }}>
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
              <Box>
                {item[1].map((mess) => {
                  return <Message {...mess} key={mess.message_id} />;
                })}
              </Box>
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default ChatBody;
