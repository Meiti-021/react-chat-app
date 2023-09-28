import {
  Box,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Divider,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

const SettingNotification = () => {
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
  const navigate = useNavigate();
  return (
    <div style={{ height: "100%", overflowY: "scroll" }}>
      <Box
        sx={{
          height: "3.5rem",
          display: "flex",
          gap: 2,
          alignItems: "center",
          bgcolor: darkmode ? "#1D2733" : "#008EE4",
          color: "white",
          px: 2,
        }}
      >
        <IconButton
          sx={{ color: "white" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography fontSize={"1rem"}>
          {language.NotificationAndSounds.title}
        </Typography>
        <IconButton sx={{ ml: "auto", color: "white" }}>
          <CheckIcon />
        </IconButton>
      </Box>
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          {language.NotificationAndSounds.showNotificationsFrom}
        </Typography>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText primary={language.NotificationAndSounds.AllAcounts} />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
      <Box p={2} sx={{ bgcolor: darkmode ? "#1D2733" : "#008EE4" }}>
        <Typography color={"white"} fontSize={"0.8rem"}>
          {language.NotificationAndSounds.firstTextLine}
        </Typography>
      </Box>
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          {language.NotificationAndSounds.notificationForChats}
        </Typography>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary={language.privates}
              secondary={language.NotificationAndSounds.tapToChange}
            />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary={language.groups}
              secondary={language.NotificationAndSounds.tapToChange}
            />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary={language.channels}
              secondary={language.NotificationAndSounds.tapToChange}
            />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          Badge Counter
        </Typography>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary={language.NotificationAndSounds.ShowBadgeIcon}
            />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary={language.NotificationAndSounds.IncludeMutedChats}
            />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary={language.NotificationAndSounds.CountUnreadedMessages}
            />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          {language.NotificationAndSounds.events}
        </Typography>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary={language.NotificationAndSounds.ContactJoined}
            />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary={language.NotificationAndSounds.PinnedMessages}
            />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          {language.others}
        </Typography>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary={language.NotificationAndSounds.keepAliveService.primary}
              secondary={
                language.NotificationAndSounds.keepAliveService.secondary
              }
              secondaryTypographyProps={{ sx: { width: "80%" } }}
            />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary={
                language.NotificationAndSounds.backgroundConnection.primary
              }
              secondary={
                language.NotificationAndSounds.backgroundConnection.secondary
              }
              secondaryTypographyProps={{ sx: { width: "80%" } }}
            />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default SettingNotification;
