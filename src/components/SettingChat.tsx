import {
  Box,
  IconButton,
  Typography,
  Slider,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
} from "@mui/material";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { MessageType } from "../utils/messages";
import { userFind } from "../utils/utils";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import moment from "moment";
import { useState } from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  changeFontSize,
  changeMessageCorner,
  switchDarkmode,
} from "../services/settingSlice";
import { useNavigate } from "react-router-dom";
const messages: MessageType[] = [
  {
    message_id: "message3",
    content: "Hey Meiti, nothing much. running around",
    timestamp: "2023-07-26 12:03:00",
    sender: "user2",
    group_sender_display_name: null,
    seen: false,
  },
  {
    message_id: "message2",
    content: "Whats Up dude?",
    timestamp: "2023-07-26 12:02:00",
    sender: "user1",
    group_sender_display_name: null,
    seen: true,
  },
];
const SettingChat = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store: RootState) => store.chat);
  const { darkmode, fontSize, messageCorner } = useSelector(
    (store: RootState) => store.setting
  );
  const navigate = useNavigate();
  const [size, setSize] = useState<number | number[]>(fontSize);
  const [corner, setCorner] = useState<number | number[]>(messageCorner);
  return (
    <div style={{ height: "100%", overflowY: "scroll" }}>
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
        <Typography fontSize={"1.1rem"}>Chat Settings</Typography>
        <IconButton
          sx={{ ml: "auto", color: "white" }}
          onClick={() => {
            dispatch(changeFontSize({ newValue: size }));
            dispatch(changeMessageCorner({ newValue: corner }));
          }}
        >
          <CheckIcon />
        </IconButton>
      </Box>
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          Chat Settings
        </Typography>
        <Slider
          aria-label="Temperature"
          defaultValue={size}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={12}
          max={30}
          onChange={(_e, newValue) => {
            setSize(newValue);
          }}
        />
      </Box>
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          Messages Corners
        </Typography>
        <Slider
          defaultValue={corner}
          min={0}
          max={9}
          onChange={(_e, newValue) => {
            setCorner(newValue);
          }}
        />
      </Box>
      <Divider />
      <Box p={2}>
        {messages.map((item) => {
          return (
            <Box
              component={"div"}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent:
                  item.sender !== "user1" ? "flex-start" : "flex-end",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  maxWidth: "70%",
                  paddingX: "1rem",
                  paddingY: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  minWidth: "17rem",
                }}
              >
                <Box
                  component={"div"}
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.5rem",
                  }}
                >
                  {item.sender !== "user1" ? (
                    <Box
                      component={"div"}
                      sx={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        src={`/assets/users/${
                          userFind(users, item.sender)?.profile_picture
                        }`}
                        sx={{
                          width: 30,
                          height: 30,
                          position: "relative",
                          zIndex: "-5",
                          background:
                            "linear-gradient(90deg, rgba(97,255,251,1) 6%, rgba(12,103,121,1) 100%)",
                        }}
                      />
                      <Typography sx={{ fontWeight: "bold" }}>
                        {userFind(users, item.sender)?.username}
                      </Typography>
                    </Box>
                  ) : (
                    <>
                      {" "}
                      {item.seen ? (
                        <DoneAllIcon
                          sx={{ color: "#5965DB", fontSize: "0.8rem" }}
                        />
                      ) : (
                        <CheckIcon
                          sx={{ color: "#5965DB", fontSize: "0.8rem" }}
                        />
                      )}{" "}
                    </>
                  )}
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                    {moment(item.timestamp).format("hh:mm")}
                  </Typography>
                </Box>
                <Box
                  component={"div"}
                  sx={{
                    width: "auto",
                    marginTop: "0.1rem",
                    backgroundColor:
                      item.sender === "user1" ? "#EAEFF4" : "#00B719",
                    color: item.sender === "user1" ? "#51606D" : "#FFF",
                    padding: "0.5rem",
                    borderRadius:
                      item.sender === "user1"
                        ? `0.${corner}rem 0rem 0.${corner}rem 0.${corner}rem`
                        : `0rem 0.${corner}rem 0.${corner}rem 0.${corner}rem`,
                    fontSize: `${size}px`,
                  }}
                >
                  {item.content}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Divider />
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          General Chat Setting
        </Typography>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemIcon>
              <BedtimeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Dark Mode"
              secondary={darkmode ? "On" : "Off"}
            />
            <ListItemSecondaryAction sx={{ p: 0, mr: -2 }}>
              <Switch
                defaultChecked
                checked={darkmode}
                onChange={() => {
                  dispatch(switchDarkmode());
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemIcon>
              <PlayCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText
              primary="Animations"
              secondary="REduce motion effects to save power"
            />
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemIcon>
              <SentimentSatisfiedAltIcon />
            </ListItemIcon>
            <ListItemText
              primary="Stickers and Emoji"
              secondary="Manage stickers, emoji and reactions"
            />
            <ListItemSecondaryAction sx={{ p: 0, mr: -2 }}>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          Media and Sound
        </Typography>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary="Tap to show next media"
              secondary="Tap near the edge of the screen while viewing media to navigate"
              secondaryTypographyProps={{ sx: { width: "90%" } }}
            />
            <ListItemSecondaryAction sx={{ p: 0, mr: -2 }}>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary="Raise to listen"
              secondary="Switch sound to earpiece by rising the phone to your ear"
              secondaryTypographyProps={{ sx: { width: "90%" } }}
            />
            <ListItemSecondaryAction sx={{ p: 0, mr: -2 }}>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary="Raise to speak"
              secondary="reacord voice messages by rising the phone to your ear"
              secondaryTypographyProps={{ sx: { width: "90%" } }}
            />
            <ListItemSecondaryAction sx={{ p: 0, mr: -2 }}>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemText
              primary="Pause music while recording"
              secondary="Pause music while reacording a video message"
              secondaryTypographyProps={{ sx: { width: "90%" } }}
            />
            <ListItemSecondaryAction sx={{ p: 0, mr: -2 }}>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemText primary="Microphoen for voice messages" />
            <ListItemSecondaryAction sx={{ p: 0, mr: -2 }}>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default SettingChat;
