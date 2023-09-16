import {
  Box,
  Typography,
  IconButton,
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const SettingLogOut = () => {
  const { darkmode } = useSelector((store: RootState) => store.setting);
  return (
    <div>
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
        <Typography fontSize={"1.1rem"}>Log Out</Typography>
      </Box>
      <Box sx={{ p: 3 }}>
        <Typography color={"#008EE4"} fontWeight={500} mb={2}>
          Alternative options
        </Typography>
        <List sx={{ p: 0, cursor: "pointer" }}>
          <ListItem sx={{ p: 0, cursor: "pointer" }}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText
              primary="Add another account"
              secondary="
              connect other Meitigram account and easily swutch between them"
            />{" "}
          </ListItem>
          <ListItem sx={{ p: 0, cursor: "pointer" }}>
            <ListItemIcon>
              <KeyOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Set a Passcode"
              secondary="Lock the app with a passcode so that others can't open it"
            />
          </ListItem>
          <ListItem sx={{ p: 0, cursor: "pointer" }}>
            <ListItemIcon>
              <DeleteOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Clear Cache"
              secondary="Free up space on your device"
            />
          </ListItem>
          <ListItem sx={{ p: 0, cursor: "pointer" }}>
            <ListItemIcon>
              <LogoutOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Change Phone Number"
              secondary="Move your account,chats and media to a new number"
            />
          </ListItem>
          <ListItem sx={{ p: 0, cursor: "pointer" }}>
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Contact Support"
              secondary="Tell us about any issue; logging out does't usually help"
            />
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default SettingLogOut;
