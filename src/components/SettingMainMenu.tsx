import Grid from "@mui/material/Grid";
import {
  Box,
  Avatar,
  IconButton,
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
// import { useState } from "react";
import { userFind } from "../utils/utils";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SettingTopMenu from "./SettingTopMenu";
import { users } from "../utils/users";
import { Link } from "react-router-dom";

const SettingMainMenu = () => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      height={"100%"}
      sx={{
        overflow: "auto",
        "&::-webkit-scrollbar": { display: "none" },
        borderRight: "1px solid #EAEDF3",
        position: "relative",
      }}
    >
      <Box
        component={"div"}
        sx={{
          height: "10rem",
          bgcolor: "#008EE4",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        <SettingTopMenu />
        <Box
          sx={{
            width: "100%",
            p: 4,
            display: "flex",
            alignItems: "center",
            color: "black",
            gap: 1,
          }}
        >
          <Avatar
            src={`/assets/users/${userFind("user1")?.profile_picture}`}
            sx={{ bgcolor: "white", width: 60, height: 60 }}
          />
          <Box>
            <Typography color={"white"} fontWeight={"bold"}>
              {users[0].username}
            </Typography>
            <Typography color={"white"} fontSize={"0.8rem"}>
              Online
            </Typography>
          </Box>
        </Box>
        <IconButton
          sx={{
            bgcolor: "white",
            position: "absolute",
            bottom: -25,
            right: 30,
            width: 50,
            height: 50,
            border: "1px solid #ebe8e8",
            ":hover": {
              bgcolor: "#ccc",
              color: "white",
            },
          }}
        >
          <CameraAltIcon />
        </IconButton>
      </Box>

      <Box>
        <Box sx={{ p: 3 }}>
          <Typography color={"#008EE4"} fontWeight={500} mb={1}>
            Account
          </Typography>
          <List sx={{ p: 0 }}>
            <ListItem sx={{ p: 0 }}>
              <Link
                to={""}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                }}
              >
                <Link
                  to={"/setting/email"}
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <ListItemText
                    primary={users[0].email}
                    secondary="Tap to change email."
                  />
                </Link>
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
                  color: "black",
                }}
              >
                <Link
                  to={"/setting/location"}
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    display: "flex",
                    color: "black",
                  }}
                >
                  <ListItemText
                    primary={users[0].location}
                    secondary="Location"
                  />
                </Link>
              </Link>{" "}
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <Link
                to={"/setting/career"}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                }}
              >
                {" "}
                <ListItemText primary={users[0].career} secondary="Career" />
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
                  color: "black",
                }}
              >
                {" "}
                <ListItemText primary={users[0].biography} secondary="Bio" />
              </Link>{" "}
            </ListItem>
          </List>
        </Box>
      </Box>
      <Divider />
      <Box>
        <Box sx={{ p: 3 }}>
          <Typography color={"#008EE4"} fontWeight={500} mb={1}>
            Setting
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
                  color: "black",
                }}
              >
                <ListItemIcon>
                  <ChatBubbleOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ borderBottom: "1px solid black", py: 1, my: 0 }}
                >
                  Chat Setting
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
                  color: "black",
                }}
              >
                <ListItemIcon>
                  <LockPersonOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ borderBottom: "1px solid black", py: 1, my: 0 }}
                >
                  Privacy and Security
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
                  color: "black",
                }}
              >
                <ListItemIcon>
                  <NotificationsNoneOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ borderBottom: "1px solid black", py: 1, my: 0 }}
                >
                  Notification and Sounds
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
                  color: "black",
                }}
              >
                <ListItemIcon>
                  <DataSaverOffOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ borderBottom: "1px solid black", py: 1, my: 0 }}
                >
                  Data and Storage
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
                  color: "black",
                }}
              >
                <ListItemIcon>
                  <PublicOutlinedIcon />
                </ListItemIcon>
                <ListItemText sx={{ py: 1, my: 0 }}>Language</ListItemText>
              </Link>{" "}
            </ListItem>
          </List>
        </Box>
      </Box>
      <Divider />
      <Box>
        <Box sx={{ p: 3 }}>
          <Typography color={"#008EE4"} fontWeight={500} mb={1}>
            Others
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
                  color: "black",
                }}
              >
                <ListItemIcon>
                  <PersonAddOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ borderBottom: "1px solid black", py: 1, my: 0 }}
                >
                  Invite Friends
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
                  color: "black",
                }}
              >
                <ListItemIcon>
                  <HelpOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText sx={{ py: 1, my: 0 }}>
                  Meitigram Features
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
