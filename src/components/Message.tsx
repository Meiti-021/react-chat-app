import * as React from "react";
import {
  Avatar,
  Box,
  Typography,
  MenuList,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { MessageType } from "../utils/messages";
import { messageFind, userFind } from "../utils/utils";
import moment from "moment";
import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import ReplyIcon from "@mui/icons-material/Reply";
import {
  deleteMessage,
  editMessage,
  replayMessage,
} from "../services/chatSlice";
import { enqueueSnackbar } from "notistack";

const Message = ({
  content,
  timestamp,
  sender,
  seen,
  message_id,
  replay,
}: MessageType) => {
  const { users, messages } = useSelector((store: RootState) => store.chat);
  const { fontSize, messageCorner } = useSelector(
    (store: RootState) => store.setting
  );
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [editedMessage, setEditedMessage] = React.useState(content);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleModalClick = () => {
    setModalOpen(true);
    handleClose();
  };
  const handleModalClose = () => {
    setModalOpen(false);
    handleClose();
  };
  return (
    <>
      <Box
        component={"div"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: sender !== "user1" ? "flex-start" : "flex-end",
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
            {sender !== "user1" ? (
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={`${userFind(users, sender)?.profile_picture}`}
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
                  {userFind(users, sender)?.username}
                </Typography>
              </Box>
            ) : (
              <>
                {" "}
                {seen ? (
                  <DoneAllIcon sx={{ color: "#5965DB", fontSize: "0.8rem" }} />
                ) : (
                  <CheckIcon sx={{ color: "#5965DB", fontSize: "0.8rem" }} />
                )}{" "}
              </>
            )}
            <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
              {moment(timestamp).local().format("hh:mm")}
            </Typography>
          </Box>
          <Box
            component={"button"}
            id={`basic-menu-options-${message_id}`}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              width: "auto",
              marginTop: "0.1rem",
              backgroundColor: sender === "user1" ? "#EAEFF4" : "#00B719",
              color: sender === "user1" ? "#51606D" : "#FFF",
              padding: "0.5rem",
              borderRadius:
                sender === "user1"
                  ? `0.${messageCorner}rem 0rem 0.${messageCorner}rem 0.${messageCorner}rem`
                  : `0rem 0.${messageCorner}rem 0.${messageCorner}rem 0.${messageCorner}rem`,
              cursor: "pointer",
              border: "none",
              textAlign: "left",
            }}
          >
            <Box
              sx={{
                display: replay ? "block" : "none",
                overflow: "hidden",
                mb: 0.5,
                borderLeft: `3px solid ${
                  sender === "user1" ? "#15100B" : "#fff"
                }`,
                pl: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {
                  userFind(users, messageFind(messages, replay)?.sender)
                    ?.username
                }
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.8rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {messageFind(messages, replay)?.content}
              </Typography>
            </Box>
            <Typography sx={{ fontSize: `${fontSize}px ` }}>
              {content}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Menu
        id={`basic-menu-options-${message_id}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuList sx={{ pr: 5 }}>
          <ListItem
            onClick={() => {
              dispatch(replayMessage({ messageId: message_id }));
              handleClose();
            }}
            sx={{ cursor: "pointer" }}
          >
            <ListItemIcon>
              <ReplyIcon />
            </ListItemIcon>
            <ListItemText>Replay</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              navigator.clipboard.writeText(content);
              handleClose();
            }}
            sx={{ cursor: "pointer" }}
          >
            <ListItemIcon>
              <ContentCopyIcon />
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
          </ListItem>
          {sender === "user1" ? (
            <ListItem
              onClick={() => {
                sender === "user1" ? handleModalClick() : handleClose();
              }}
              sx={{ cursor: "pointer" }}
            >
              <ListItemIcon>
                <EditIcon />{" "}
              </ListItemIcon>
              <ListItemText>Edit</ListItemText>
            </ListItem>
          ) : undefined}
          <ListItem
            onClick={() => {
              dispatch(deleteMessage({ messageId: message_id }));
              handleClose();
            }}
            sx={{ cursor: "pointer" }}
          >
            <ListItemIcon>
              {" "}
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </ListItem>
        </MenuList>
      </Menu>
      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        sx={{ minWidth: "450px" }}
      >
        <DialogTitle>Edit Messages</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Content"
            type="text"
            fullWidth
            variant="standard"
            value={editedMessage}
            onChange={(e) => {
              setEditedMessage(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose}>Cancel</Button>
          <Button
            onClick={() => {
              if (editedMessage) {
                dispatch(
                  editMessage({
                    messageId: message_id,
                    newContent: editedMessage,
                  })
                );
                handleModalClose();
                handleClose();
              } else {
                enqueueSnackbar({
                  variant: "error",
                  message: "Message can't be empty",
                });
              }
            }}
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Message;
