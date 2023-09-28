import { IconButton, Tooltip } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const ChatNotification = () => {
  const [isMute, setIsMute] = useState<boolean>(false);
  const { language } = useSelector((store: RootState) => store.setting);
  return (
    <Tooltip title={isMute ? language.muteOff : language.mute}>
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
