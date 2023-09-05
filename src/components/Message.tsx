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
import { userFind } from "../utils/utils";
import moment from "moment";
import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { deleteMessage, editMessage } from "../services/chatSlice";

const Message = ({
  content,
  timestamp,
  sender,
  seen,
  message_id,
}: MessageType) => {
  const { users } = useSelector((store: RootState) => store.chat);
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
                  src={`/assets/users/${
                    userFind(users, sender)?.profile_picture
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
              {moment(timestamp).format("hh:mm")}
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
                  ? "0.5rem 0rem 0.5rem 0.5rem"
                  : "0rem 0.5rem 0.5rem 0.5rem",
              cursor: "pointer",
              border: "none",
              textAlign: "left",
            }}
          >
            <Typography>{content}</Typography>
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
          <ListItem
            onClick={() => {
              dispatch(deleteMessage({ messageId: message_id }));
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
            label="Email Address"
            type="email"
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
              } else {
                alert("message cant be empty");
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
