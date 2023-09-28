import { UserType } from "../utils/users";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import AttachedFiles from "./AttachedFiles";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WorkIcon from "@mui/icons-material/Work";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import * as React from "react";
import ChatMedia from "./ChatMedia";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  padding: boolean;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, padding, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: padding ? 3 : 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PrivateInfoDetail = ({ user }: { user: UserType }) => {
  const [value, setValue] = React.useState(0);
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={language.about} {...a11yProps(0)} />
          <Tab label={language.media} {...a11yProps(2)} />
          <Tab label={language.files} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} padding={false}>
        <List
          sx={{
            width: "100%",
            background: darkmode ? "#1D2733" : "white",
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AlternateEmailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={language.email}
              secondary={user.email}
              primaryTypographyProps={{ sx: { textTransform: "capitalize" } }}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={language.career}
              secondary={user.career}
              primaryTypographyProps={{ sx: { textTransform: "capitalize" } }}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PersonPinCircleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={language.location}
              secondary={user.location}
              primaryTypographyProps={{ sx: { textTransform: "capitalize" } }}
            />
          </ListItem>
        </List>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1} padding={false}>
        <ChatMedia />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} padding={true}>
        <AttachedFiles />
      </CustomTabPanel>
    </Box>
  );
};

export default PrivateInfoDetail;
