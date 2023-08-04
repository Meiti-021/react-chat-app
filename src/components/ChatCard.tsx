import Card from "@mui/material/Card";
import { users } from "../utils/users";
import { messages as messages_list } from "../utils/messages";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Avatar, Box, Typography, Badge, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Alert from "@mui/material/Alert";
import moment from "moment";
type User = {
  user_id: string;
  username: string;
  email: string;
  profile_picture: string;
  private_chats: string[];
  group_chats: string[];
};
type Message = {
  message_id: string;
  content: string;
  timestamp: string;
  sender: string;
  group_sender_display_name: boolean;
  seen: boolean;
};

const ChatCard = ({
  participants,
  messages,
  peer_private,
}: {
  peer_private: boolean;
  participants: Array<string>;
  messages: Array<string>;
}) => {
  const [user, setUser] = useState(undefined);

  return (
    <Card
      component={Link}
      to={"/"}
      sx={{
        width: "100%",
        display: "flex",
        paddingX: "2rem",
        paddingY: "1.9rem",
        alignItems: "center",
        textDecoration: "none",
        gap: "1rem",
        borderBottom: "1px solid #89939C",
        borderRadius: "0",
      }}
    >
      <Avatar
        src={
          peer_private
            ? `/assets/users/${
                users.find((item) => item.user_id === participants[1])
                  ?.profile_picture
              }`
            : undefined
        }
        sx={{ width: 40, height: 40 }}
      />
      <Box component={"div"} sx={{ width: "100%" }}>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "space-between",

            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: "1.1rem" }}>
            {users.find((item) => item.user_id === participants[1])?.username}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.8rem",
              color: "#8D97A5",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            {moment(
              messages_list.find(
                (item) => item.message_id === messages[messages.length - 1]
              )?.timestamp
            )?.fromNow()}
          </Typography>
        </Box>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingRight: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#89939C",
              display: "-webkit-box",
              webkitBoxOrient: "vertical",
              webkitLineClamp: "1",
              overflow: "hidden",
              textOverflow: " ellipsis",
            }}
          >
            {peer_private ? (
              <>
                {" "}
                {
                  messages_list.find(
                    (item) => item.message_id === messages[messages.length - 1]
                  )?.content
                }{" "}
              </>
            ) : (
              <>
                {messages_list.find(
                  (item) => item.message_id === messages[messages.length - 1]
                )?.sender +
                  ":" +
                  messages_list.find(
                    (item) => item.message_id === messages[messages.length - 1]
                  )?.content}
              </>
            )}
          </Typography>
          {messages_list.find(
            (item) => item.message_id === messages[messages.length - 1]
          )?.sender === "user1" ? (
            <>
              {messages_list.find(
                (item) => item.message_id === messages[messages.length - 1]
              )?.seen ? (
                <Stack direction={"row"}>
                  <CheckIcon sx={{ color: "#5965DB", marginRight: "-17px" }} />
                  <CheckIcon sx={{ color: "#5965DB" }} />
                </Stack>
              ) : (
                <CheckIcon sx={{ color: "#5965DB" }} />
              )}
            </>
          ) : (
            <Badge
              badgeContent={
                messages_list.filter(
                  (item) =>
                    item.message_id === messages[messages.length - 1] &&
                    item.seen === false
                ).length
              }
              color="error"
            />
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default ChatCard;
