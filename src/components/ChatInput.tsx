import {
  Box,
  Button,
  Dialog,
  DialogActions,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CollectionsIcon from "@mui/icons-material/Collections";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { ChangeEvent } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { cancelReply, sendMessage } from "../services/chatSlice";
import moment from "moment";
import { RootState } from "../store";
import ReplyIcon from "@mui/icons-material/Reply";
import { messageFind, userFind } from "../utils/utils";
import { enqueueSnackbar } from "notistack";
const ChatInput = ({
  chat_id,
  reply,
}: {
  chat_id: string;
  reply: undefined | string;
}) => {
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
  const { users, messages } = useSelector((store: RootState) => store.chat);
  const [input, setInput] = useState("");
  const [imageCaption, setImageCaption] = useState("");
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageUploadeOpen, setImageUploadOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const image = e.target.files[0];
      setImageUrl(URL.createObjectURL(image));
    }
  };
  const handleClose = () => {
    setImageCaption("");
    setImageUrl("");
    setImageUploadOpen(false);
  };
  const handleSendMediaChat = () => {
    if (imageUrl) {
      dispatch(
        sendMessage({
          chatId: chat_id,
          message: {
            message_id: Date.now().toString(36) + Math.random().toString(36),
            content: imageCaption,
            timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
            sender: "user1",
            group_sender_display_name: null,
            seen: false,
            reply: reply,
            media: imageUrl,
          },
        })
      );
      dispatch(cancelReply({ chatId: chat_id }));
      handleClose();
    } else {
      enqueueSnackbar({ variant: "error", message: "select an image first!" });
    }
  };

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "3.5rem",
            width: "100%",
            display: reply !== undefined ? "flex" : "none",
            alignItems: "center",
            gap: 2,
            padding: "1rem",
            marginTop: "auto",
            position: "absolute",
            top: -55,
            borderTop: "1px solid #cfd0d1",
            borderBottom: "1px solid #cfd0d1",
            bgcolor: darkmode ? "black" : "white",
          }}
        >
          <ReplyIcon sx={{ color: "#cfd0d1", fontSize: "2rem" }} />
          <Box
            sx={{
              overflow: "hidden",
              borderLeft: `3px solid #cfd0d1`,
              pl: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontWeight: "bold",
              }}
            >
              {userFind(users, messageFind(messages, reply)?.sender)?.username}
            </Typography>

            <Typography
              sx={{
                fontSize: "0.75rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {messageFind(messages, reply)?.content}
            </Typography>
          </Box>
          <IconButton
            sx={{ ml: "auto" }}
            onClick={() => {
              dispatch(cancelReply({ chatId: chat_id }));
            }}
          >
            <CloseIcon sx={{ color: "#cfd0d1", fontSize: "2rem" }} />
          </IconButton>
        </Box>
        <Box
          component={"form"}
          sx={{
            height: "3.5rem",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: darkmode ? "none" : "1px solid #EAEDF3",
            padding: "1rem",
            background: darkmode ? "black" : "white",
          }}
        >
          <input
            type="text"
            placeholder={language.typeMessageHere}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              outline: "none",
              background: darkmode ? "black" : "white",
              color: darkmode ? "white" : "black",
            }}
          />
          <Box
            component={"div"}
            sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <Tooltip title={language.image} arrow>
              <IconButton onClick={() => setImageUploadOpen(true)}>
                <CollectionsIcon sx={{ color: "#cfd0d1", cursor: "pointer" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title={language.attachFile} arrow>
              <label
                htmlFor="input-file"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.2rem",
                  marginRight: "-0.4rem",
                }}
              >
                <AttachFileIcon sx={{ color: "#cfd0d1", cursor: "pointer" }} />
                <input
                  type="file"
                  src=""
                  alt=""
                  id="input-file"
                  style={{ display: "none" }}
                />
              </label>
            </Tooltip>

            <Tooltip title={language.openEmojiTab} arrow>
              <IconButton
                onClick={() => {
                  setEmojiOpen(true);
                }}
              >
                <EmojiEmotionsIcon
                  sx={{ color: "#cfd0d1", cursor: "pointer" }}
                />
              </IconButton>
            </Tooltip>

            <div
              style={{
                position: "absolute",
                right: "0",
                bottom: "0",
                display: emojiOpen ? "block" : "none",
              }}
              id="emoji-box"
            >
              <IconButton
                onClick={() => {
                  setEmojiOpen(false);
                }}
              >
                <CloseIcon />
              </IconButton>
              {emojiOpen ? (
                <EmojiPicker
                  onEmojiClick={(emojiData) => {
                    setInput(input + emojiData.emoji);
                  }}
                />
              ) : undefined}
            </div>
            <Tooltip title={language.send} arrow>
              <IconButton
                color="primary"
                onClick={() => {
                  setInput("");
                  dispatch(
                    sendMessage({
                      chatId: chat_id,
                      message: {
                        message_id:
                          Date.now().toString(36) + Math.random().toString(36),
                        content: input,
                        timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
                        sender: "user1",
                        group_sender_display_name: null,
                        seen: false,
                        reply: reply,
                        media: undefined,
                      },
                    })
                  );
                  dispatch(cancelReply({ chatId: chat_id }));
                }}
              >
                <SendIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </div>
      <Dialog
        open={imageUploadeOpen}
        onClose={handleClose}
        maxWidth={"sm"}
        PaperProps={{
          sx: { width: "100%", p: 3 },
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt=""
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        ) : (
          <label
            htmlFor="input-image"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.2rem",
              width: "100%",
              height: "400px",
            }}
          >
            <CollectionsIcon sx={{ color: "#cfd0d1", cursor: "pointer" }} />
            <input
              type="file"
              accept="image/*"
              id="input-image"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </label>
        )}
        <TextField
          fullWidth
          placeholder="caption"
          variant="standard"
          value={imageCaption}
          onChange={(e) => {
            setImageCaption(e.target.value);
          }}
          sx={{ mt: 1 }}
        />
        <DialogActions>
          <Stack direction={"row"} gap={1}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={handleSendMediaChat}>
              Send
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ChatInput;
