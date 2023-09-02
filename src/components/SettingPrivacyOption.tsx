import {
  Button,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import React from "react";

const SettingPrivacyOption = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  const [open, SetOpen] = React.useState<boolean>(false);
  return (
    <ListItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
      <ListItemSecondaryAction>
        <Button
          onClick={() => {
            SetOpen(!open);
          }}
        >
          {open ? "on" : "Off"}
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default SettingPrivacyOption;
