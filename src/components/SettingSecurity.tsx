import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Button,
} from "@mui/material";
import { useState } from "react";
import SettingPrivacyPassword from "./SettingPrivacyPassword";
import SettingPrivacyBackup from "./SettingPrivacyBackup";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const SettingSecurity = () => {
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
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
      {language.settingData.map((item) => {
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
