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

const SettingNotification = () => {
  const { darkmode } = useSelector((store: RootState) => store.setting);

  return (
    <div style={{ height: "100%", overflowY: "scroll" }}>
      <Box
        sx={{
          height: "3.5rem",
          display: "flex",
          gap: 5,
          alignItems: "center",
          bgcolor: darkmode ? "#1D2733" : "#008EE4",
          color: "white",
          px: 2,
        }}
      >
        <IconButton sx={{ color: "white" }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography fontSize={"1.1rem"}>
          Notification and Sounds Settings
        </Typography>
        <IconButton sx={{ ml: "auto", color: "white" }}>
          <CheckIcon />
        </IconButton>
      </Box>
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          Show notification from
        </Typography>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText primary="All accounts" />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
      <Box p={2} sx={{ bgcolor: darkmode ? "#1D2733" : "#008EE4" }}>
        <Typography color={"white"} fontSize={"0.8rem"}>
          Turn This off if you want to recieve notifications only from the
          account you are currently using.
        </Typography>
      </Box>
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          Notificaton for chats
        </Typography>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText primary="Private Chats" secondary="Tap to Change" />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemText primary="Groups" secondary="Tap to Change" />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemText primary="Channels" secondary="Tap to Change" />
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
            <ListItemText primary="Show Badge Icon" />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText primary="Include Muted Chats" />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText primary="Count Unreaded Messages" />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          Events
        </Typography>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText primary="Contact joined to Meitigram" />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText primary="Pinned Messages" />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          Others
        </Typography>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary="Keep-Alive Service"
              secondary="Relunch web when shut down.Enable for reliable notofication"
            />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary="Background Connection"
              secondary="Keep a low inpact background connection to telegram for reliable notification."
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
