import Card from "@mui/material/Card";
import { users } from "../utils/users";
import { messages as messages_list } from "../utils/messages";
import { NavLink } from "react-router-dom";
import { Avatar, Box, Typography, Badge, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import moment from "moment";
import { messageFind, userFind, userNameFind } from "../utils/utils";
import { ChatType } from "../utils/chats";

const ChatCard = ({
  participants,
  messages,
  peer_private,
  group_name,
  group_profile,
  chat_id,
}: ChatType) => {
  return (
    <Card
      component={NavLink}
      to={`/${chat_id}`}
      sx={{
        width: "100%",
        display: "flex",
        paddingX: "2rem",
        paddingY: "2rem",
        alignItems: "center",
        textDecoration: "none",
        gap: "1rem",
        borderBottom: "1px solid #EAEDF3",
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
            : `/assets/users/${group_profile}`
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
            {peer_private ? (
              <> {userFind(participants[1])?.username}</>
            ) : (
              <>{group_name}</>
            )}
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
              <> {messageFind(messages[messages.length - 1])?.content} </>
            ) : (
              <>
                {userNameFind(
                  userFind(messageFind(messages[messages.length - 1])?.sender)
                    ?.user_id
                ) +
                  " : " +
                  messages_list.find(
                    (item) => item.message_id === messages[messages.length - 1]
                  )?.content}
              </>
            )}
          </Typography>
          {messageFind(messages[messages.length - 1])?.sender === "user1" ? (
            <>
              {messageFind(messages[messages.length - 1])?.seen ? (
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
