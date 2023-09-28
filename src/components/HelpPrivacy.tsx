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
import { useNavigate } from "react-router-dom";
const HelpPrivacy = () => {
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
  const navigate = useNavigate();
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
        <IconButton
          sx={{ color: "white" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography fontSize={"1.1rem"}>
          {language.helpCenter.privacy.title}
        </Typography>
      </Box>
      <Box p={2}>
        <List sx={{ p: 0 }}>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              <PhonelinkLockIcon />{" "}
            </ListItemIcon>
            <ListItemText
              primary={language.helpCenter.privacy.privacyPolicy.primary}
              secondary={language.helpCenter.privacy.privacyPolicy.secondary}
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              <InfoOutlinedIcon />{" "}
            </ListItemIcon>
            <ListItemText
              primary={
                language.helpCenter.privacy.informationCollection.primary
              }
              secondary={
                language.helpCenter.privacy.informationCollection.secondary
              }
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              {" "}
              <SecurityOutlinedIcon />{" "}
            </ListItemIcon>
            <ListItemText
              primary={language.helpCenter.privacy.DataSecurity.primary}
              secondary={language.helpCenter.privacy.DataSecurity.secondary}
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              {" "}
              <PortableWifiOffOutlinedIcon />{" "}
            </ListItemIcon>
            <ListItemText
              primary={language.helpCenter.privacy.thirdPartyServices.primary}
              secondary={
                language.helpCenter.privacy.thirdPartyServices.secondary
              }
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              {" "}
              <ContactEmergencyOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={language.helpCenter.privacy.yourChoice.primary}
              secondary={language.helpCenter.privacy.yourChoice.secondary}
            />
          </ListItem>
        </List>
      </Box>
      <Box
        p={2}
        sx={{ bgcolor: darkmode ? "#1D2733" : "#008EE4", color: "white" }}
      >
        {language.helpCenter.privacy.bottomLine}
      </Box>
    </>
  );
};
export default HelpPrivacy;
