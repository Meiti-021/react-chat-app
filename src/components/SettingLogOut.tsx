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
import { useNavigate } from "react-router-dom";
const SettingLogOut = () => {
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
  const navigate = useNavigate();
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
        <IconButton
          sx={{ color: "white" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography fontSize={"1.1rem"}>{language.logOut}</Typography>
      </Box>
      <Box sx={{ p: 3 }}>
        <Typography color={"#008EE4"} fontWeight={500} mb={2}>
          {language.logoutPage.alternativeOptions}
        </Typography>
        <List sx={{ p: 0, cursor: "pointer" }}>
          <ListItem sx={{ p: 0, cursor: "pointer" }}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText
              primary={language.logoutPage.addAnotherAccount.primary}
              secondary={language.logoutPage.addAnotherAccount.secondary}
            />{" "}
          </ListItem>
          <ListItem sx={{ p: 0, cursor: "pointer" }}>
            <ListItemIcon>
              <KeyOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={language.logoutPage.changePhoneNumber.primary}
              secondary={language.logoutPage.changePhoneNumber.secondary}
            />
          </ListItem>
          <ListItem sx={{ p: 0, cursor: "pointer" }}>
            <ListItemIcon>
              <DeleteOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={language.logoutPage.setPasscode.primary}
              secondary={language.logoutPage.setPasscode.secondary}
            />
          </ListItem>
          <ListItem sx={{ p: 0, cursor: "pointer" }}>
            <ListItemIcon>
              <LogoutOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={language.logoutPage.clearCache.primary}
              secondary={language.logoutPage.clearCache.secondary}
            />
          </ListItem>
          <ListItem sx={{ p: 0, cursor: "pointer" }}>
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={language.logoutPage.clearCache.primary}
              secondary={language.logoutPage.clearCache.secondary}
            />
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default SettingLogOut;
