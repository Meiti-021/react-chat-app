import Grid from "@mui/material/Grid";
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@mui/material";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { userFind } from "../utils/utils";
import SettingTopMenu from "./SettingTopMenu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import SettingProfileChange from "./SettingProfileChange";

const SettingMainMenu = () => {
  const { users } = useSelector((store: RootState) => store.chat);
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        overflowX: "hidden",
        "&::-webkit-scrollbar": { display: "none" },
        borderRight: "1px solid #EAEDF3",
        position: "relative",
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <Box
        component={"div"}
        sx={{
          height: "10rem",
          bgcolor: darkmode ? "#1D2733" : "#008EE4",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: darkmode ? "white" : "black",
        }}
      >
        <SettingTopMenu />
        <Box
          sx={{
            width: "100%",
            p: 4,
            display: "flex",
            alignItems: "center",
            color: darkmode ? "white" : "black",
            gap: 1,
          }}
        >
          <Avatar
            src={`${userFind(users, "user1")?.profile_picture}`}
            sx={{
              bgcolor: darkmode ? "black" : "white",
              width: 60,
              height: 60,
            }}
          />
          <Box sx={{ overflow: "hidden" }}>
            <Typography
              color={"white"}
              fontWeight={"bold"}
              sx={{
                width: "100%",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {users[0].username + " " + users[0].userLastName}
            </Typography>
            <Typography color={"white"} fontSize={"0.8rem"}>
              {language.online}
            </Typography>
          </Box>
        </Box>
        <SettingProfileChange />
      </Box>
      <Box>
        <Box sx={{ p: 3 }}>
          <Typography color={"#008EE4"} fontWeight={500} mb={1}>
            {language.account}
          </Typography>
          <List sx={{ p: 0 }}>
            <ListItem sx={{ p: 0 }}>
              <Link
                to={"/setting/email"}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  color: darkmode ? "white" : "black",
                  overflow: "hidden",
                }}
              >
                <ListItemText
                  primary={users[0].email}
                  secondary={language.tapToChangeEmail}
                  primaryTypographyProps={{
                    sx: {
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    },
                  }}
                />
              </Link>
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <Link
                to={"/setting/location"}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  color: darkmode ? "white" : "black",
                }}
              >
                <ListItemText
                  primary={users[0].location}
                  secondary={language.location}
                />
              </Link>
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <Link
                to={"/setting/career"}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: darkmode ? "white" : "black",
                }}
              >
                {" "}
                <ListItemText
                  primary={users[0].career}
                  secondary={language.career}
                />
              </Link>{" "}
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <Link
                to={"/setting/bio"}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: darkmode ? "white" : "black",
                }}
              >
                {" "}
                <ListItemText
                  primary={users[0].biography}
                  secondary={language.bio}
                />
              </Link>{" "}
            </ListItem>
          </List>
        </Box>
      </Box>
      <Divider />
      <Box>
        <Box sx={{ p: 3 }}>
          <Typography color={"#008EE4"} fontWeight={500} mb={1}>
            {language.setting}
          </Typography>
          <List
            sx={{
              p: 0,
              mt: 2,
            }}
          >
            <ListItem sx={{ p: 0 }}>
              <Link
                to={"/setting/chat-setting"}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: darkmode ? "white" : "black",
                }}
              >
                <ListItemIcon>
                  <ChatBubbleOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    borderBottom: darkmode
                      ? "1px solid #1D2733"
                      : "1px solid black",
                    py: 1,
                    my: 0,
                  }}
                >
                  {language.chatSetting.title}
                </ListItemText>
              </Link>{" "}
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <Link
                to={"/setting/privacy"}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: darkmode ? "white" : "black",
                }}
              >
                <ListItemIcon>
                  <LockPersonOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    borderBottom: darkmode
                      ? "1px solid #1D2733"
                      : "1px solid black",
                    py: 1,
                    my: 0,
                  }}
                >
                  {language.PrivacyAndPolicy.title}
                </ListItemText>
              </Link>{" "}
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <Link
                to={"/setting/notification"}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: darkmode ? "white" : "black",
                }}
              >
                <ListItemIcon>
                  <NotificationsNoneOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    borderBottom: darkmode
                      ? "1px solid #1D2733"
                      : "1px solid black",
                    py: 1,
                    my: 0,
                  }}
                >
                  {language.NotificationAndSounds.title}
                </ListItemText>
              </Link>{" "}
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <Link
                to={"/setting/data"}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: darkmode ? "white" : "black",
                }}
              >
                <ListItemIcon>
                  <DataSaverOffOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    borderBottom: darkmode
                      ? "1px solid #1D2733"
                      : "1px solid black",
                    py: 1,
                    my: 0,
                  }}
                >
                  {language.DataAndStorage.title}
                </ListItemText>
              </Link>{" "}
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <Link
                to={"/setting/language"}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: darkmode ? "white" : "black",
                }}
              >
                <ListItemIcon>
                  <PublicOutlinedIcon />
                </ListItemIcon>
                <ListItemText sx={{ py: 1, my: 0 }}>
                  {language.language}
                </ListItemText>
              </Link>{" "}
            </ListItem>
          </List>
        </Box>
      </Box>
      <Divider />
      <Box>
        <Box sx={{ p: 3 }}>
          <Typography color={"#008EE4"} fontWeight={500} mb={1}>
            {language.others}
          </Typography>
          <List
            sx={{
              p: 0,
              mt: 2,
            }}
          >
            <ListItem sx={{ p: 0 }}>
              <Link
                to={""}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: darkmode ? "white" : "black",
                }}
              >
                <ListItemIcon>
                  <PersonAddOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    borderBottom: darkmode
                      ? "1px solid #1D2733"
                      : "1px solid black",
                    py: 1,
                    my: 0,
                  }}
                >
                  {language.InviteFriends}
                </ListItemText>
              </Link>{" "}
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <Link
                to={""}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: darkmode ? "white" : "black",
                }}
              >
                <ListItemIcon>
                  <HelpOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText sx={{ py: 1, my: 0 }}>
                  {language.MeitigramFeatures}
                </ListItemText>
              </Link>{" "}
            </ListItem>
          </List>
        </Box>
      </Box>
    </Grid>
  );
};

export default SettingMainMenu;
