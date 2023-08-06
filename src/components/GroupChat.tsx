import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import { ChatType } from "../utils/chats";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import { userFind } from "../utils/utils";
const GroupChat = ({
  chat_id,
  peer_private,
  participants,
  messages,
  group_name,
  group_profile,
}: ChatType) => {
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
        <Typography
          sx={{
            fontSize: "0.9rem",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {group_name}
        </Typography>
        <Box
          sx={{
            fontSize: "0.7rem",
            fontWeight: "bold",
            paddingY: "5px",
            paddingX: "15px",
            borderRadius: "5px",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <AvatarGroup
              max={4}
              sx={{
                "& .MuiAvatar-root": { width: 30, height: 30, fontSize: 12 },
              }}
            >
              {participants.map((item, index) => {
                return (
                  <Avatar
                    alt={userFind(item)?.username}
                    src={`/assets/users/${userFind(item)?.profile_picture}`}
                    key={"gruop-memeber" + index}
                  />
                );
              })}
            </AvatarGroup>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "0.7rem",
              borderLeft: "1px solid #d0d2d6",
              paddingLeft: "1rem",
              marginLeft: "0.5rem",
              alignItems: "center",
            }}
          >
            <CallIcon sx={{ color: "#d0d2d6" }} />
            <NotificationsIcon sx={{ color: "#d0d2d6" }} />
            <SettingsIcon sx={{ color: "#d0d2d6" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GroupChat;
