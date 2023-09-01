import * as React from "react";
import {
  Box,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Button,
} from "@mui/material";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyIcon from "@mui/icons-material/Key";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingPrivacyPassword from "./SettingPrivacyPassword";
import SettingPrivacyBackup from "./SettingPrivacyBackup";
import AvTimerIcon from "@mui/icons-material/AvTimer";
const settingData: {
  id: "pass" | "delete" | "login";
  icon: React.ReactNode;
  title: string;
}[] = [
  {
    id: "pass",
    icon: <KeyIcon />,
    title: "Two-Step verification",
  },
  {
    id: "delete",
    icon: <AvTimerIcon />,
    title: "Auto-Delete Messages",
  },
  {
    id: "login",
    icon: <EmailOutlinedIcon />,
    title: "Login with emial",
  },
];
const SettingPrivacy = () => {
  const [setting, setSetting] = useState<{
    pass: boolean;
    delete: boolean;
    login: boolean;
  }>({
    pass: false,
    delete: false,
    login: false,
  });
  return (
    <div>
      <Box
        sx={{
          height: "3.5rem",
          display: "flex",
          gap: 5,
          alignItems: "center",
          bgcolor: "#008EE4",
          color: "white",
          px: 2,
        }}
      >
        <IconButton sx={{ color: "white" }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography fontSize={"1.1rem"}>Privacy and Security</Typography>
      </Box>
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          Security
        </Typography>
      </Box>
      <List sx={{ px: 0, mt: -2 }}>
        {settingData.map((item) => {
          return (
            <ListItem key={item.id}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
              <ListItemSecondaryAction>
                <Button
                  onClick={() => {
                    setSetting({ ...setting, [item.id]: !setting[item.id] });
                  }}
                >
                  {setting[item.id] ? "on" : "Off"}
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
        <SettingPrivacyPassword />
        <SettingPrivacyBackup />
      </List>
      <Box p={2} sx={{ bgcolor: "#008EE4" }}>
        <Typography color={"white"} fontSize={"0.8rem"}>
          Review the list of devices where you are logged into your meitigram
          app.
        </Typography>
      </Box>
    </div>
  );
};

export default SettingPrivacy;
