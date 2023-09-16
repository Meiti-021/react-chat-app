import * as React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Button,
} from "@mui/material";
import { useState } from "react";
import KeyIcon from "@mui/icons-material/Key";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingPrivacyPassword from "./SettingPrivacyPassword";
import SettingPrivacyBackup from "./SettingPrivacyBackup";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import { useSelector } from "react-redux";
import { RootState } from "../store";
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

const SettingSecurity = () => {
  const { darkmode } = useSelector((store: RootState) => store.setting);
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
      <SettingPrivacyPassword darkmode={darkmode} />
      <SettingPrivacyBackup darkmode={darkmode} />
    </List>
  );
};

export default SettingSecurity;
