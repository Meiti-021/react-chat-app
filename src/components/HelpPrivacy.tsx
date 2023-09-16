import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import PortableWifiOffOutlinedIcon from "@mui/icons-material/PortableWifiOffOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const HelpPrivacy = () => {
  const { darkmode } = useSelector((store: RootState) => store.setting);

  return (
    <>
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
        <Typography fontSize={"1.1rem"}>Privacy and Policy</Typography>
      </Box>
      <Box p={2}>
        <List sx={{ p: 0 }}>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              <PhonelinkLockIcon />{" "}
            </ListItemIcon>
            <ListItemText
              primary="Privacy Policy"
              secondary="At [Your App Name], we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines the types of data we collect, how we use and safeguard
          that data, and your rights regarding your personal information."
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              <InfoOutlinedIcon />{" "}
            </ListItemIcon>
            <ListItemText
              primary="Information Collection and Usage"
              secondary="We collect the data you provide to us when using our chat app,
          including but not limited to your name, profile picture, messages, and
          contact information. This data is used solely for the purpose of
          facilitating communication within the app and improving user
          experience."
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              {" "}
              <SecurityOutlinedIcon />{" "}
            </ListItemIcon>
            <ListItemText
              primary="Data Security"
              secondary="We implement strict security measures to protect your personal data
          from unauthorized access, disclosure, or alteration. However, please
          be aware that no online transmission or storage method is 100% secure."
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              {" "}
              <PortableWifiOffOutlinedIcon />{" "}
            </ListItemIcon>
            <ListItemText
              primary="Third-Party Services"
              secondary="We may use third-party services to analyze app usage and gather
          insights to enhance our services. These third parties may collect and
          process data in accordance with their own privacy policies."
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              {" "}
              <ContactEmergencyOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary=" Your Choices"
              secondary="You can update, correct, or delete your personal information within
          the app settings. You also have the right to access, rectify, or erase
          your data by contacting us."
            />
          </ListItem>
        </List>
      </Box>
      <Box
        p={2}
        sx={{ bgcolor: darkmode ? "#1D2733" : "#008EE4", color: "white" }}
      >
        By using our chat app, you agree to the terms outlined in this Privacy
        Policy.
      </Box>
    </>
  );
};
export default HelpPrivacy;
