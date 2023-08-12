import { IconButton, Tooltip } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import { useState } from "react";
const ChatNotification = () => {
  const [isMute, setIsMute] = useState<boolean>(false);
  return (
    <Tooltip title={isMute ? "Mute off" : "Mute"}>
      <IconButton
        onClick={() => {
          setIsMute(!isMute);
        }}
      >
        {isMute ? (
          <NotificationsOffIcon sx={{ color: "#d0d2d6" }} />
        ) : (
          <NotificationsIcon sx={{ color: "#d0d2d6" }} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ChatNotification;
