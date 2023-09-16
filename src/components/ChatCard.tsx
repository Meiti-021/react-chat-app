import { messages as messages_list } from "../utils/messages";
import { NavLink } from "react-router-dom";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Avatar, Box, Typography, Badge } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import moment from "moment";
import { messageFind, userFind, userNameFind } from "../utils/utils";
import { ChatType } from "../utils/chats";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ChatCard = ({
  participants,
  messages: chat_messages,
  peer_private,
  group_name,
  group_profile,
  chat_id,
}: ChatType) => {
  const { users, messages } = useSelector((store: RootState) => store.chat);
  const { darkmode } = useSelector((store: RootState) => store.setting);
  return (
    <NavLink
      to={`/${chat_id}`}
      style={({ isActive }) => {
        return {
          width: "100%",
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          gap: "1rem",
          borderBottom: darkmode ? "1px solid black" : "1px solid #EAEDF3",
          borderRadius: "0",
          borderLeft: isActive ? "5px solid #1976D2" : undefined,
          backgroundColor:
            isActive && darkmode
              ? "#212D3B"
              : !isActive && darkmode
              ? "#1D2733"
              : isActive && !darkmode
              ? "#84d7fa"
              : "#fff",
          padding: "15px 20px",
          ":hover": {
            backgroundColor: "#EEFDF0",
          },
        };
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
        sx={{
          width: "2.5rem",
          height: "2.5rem",
          background:
            "linear-gradient(90deg, rgba(97,255,251,1) 6%, rgba(12,103,121,1) 100%)",
        }}
      />
      <Box component={"div"} sx={{ width: "100%", overflow: "hidden" }}>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              flexShrink: 0,
              fontFamily: "Public Sans",
              textTransform: "capitalize",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontWeight: "600",
              color: darkmode ? "lightgrey" : "#343a40",
            }}
          >
            {peer_private ? (
              <> {userFind(users, participants[1])?.username}</>
            ) : (
              <>{group_name}</>
            )}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.6875rem",
              color: "#7a7f9a",
              fontWeight: "400",
              textTransform: "uppercase",
              overflow: "hidden",
              textOverflow: " ellipsis",
              whiteSpace: "nowrap",
              fontFamily: "Public Sans",
            }}
          >
            {moment(
              messages_list.find(
                (item) =>
                  item.message_id === chat_messages[chat_messages.length - 1]
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
            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#89939C",
              overflow: "hidden",
              textOverflow: " ellipsis",
              whiteSpace: "nowrap",
              mr: 2,
            }}
          >
            {peer_private ? (
              <>
                {" "}
                {
                  messageFind(messages, chat_messages[chat_messages.length - 1])
                    ?.content
                }{" "}
              </>
            ) : (
              <>
                {userNameFind(
                  users,
                  userFind(
                    users,
                    messageFind(
                      messages,
                      chat_messages[chat_messages.length - 1]
                    )?.sender
                  )?.user_id
                ) +
                  " : " +
                  messages_list.find(
                    (item) =>
                      item.message_id ===
                      chat_messages[chat_messages.length - 1]
                  )?.content}
              </>
            )}
          </Typography>
          {messageFind(messages, chat_messages[chat_messages.length - 1])
            ?.sender === "user1" ? (
            <>
              {messageFind(messages, chat_messages[chat_messages.length - 1])
                ?.seen ? (
                <DoneAllIcon sx={{ color: "#5965DB", fontSize: "1rem" }} />
              ) : (
                <CheckIcon sx={{ color: "#5965DB", fontSize: "1rem" }} />
              )}
            </>
          ) : (
            <Badge
              badgeContent={
                messages_list.filter(
                  (item) =>
                    item.message_id ===
                      chat_messages[chat_messages.length - 1] &&
                    item.seen === false
                ).length
              }
              color="primary"
            />
          )}
        </Box>
      </Box>
    </NavLink>
  );
};

export default ChatCard;
