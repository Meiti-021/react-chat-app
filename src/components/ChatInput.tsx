import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CollectionsIcon from "@mui/icons-material/Collections";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { cancelReply, sendMessage } from "../services/chatSlice";
import moment from "moment";
import { RootState } from "../store";
import ReplyIcon from "@mui/icons-material/Reply";
import { messageFind, userFind } from "../utils/utils";
const ChatInput = ({
  chat_id,
  reply,
}: {
  chat_id: string;
  reply: undefined | string;
}) => {
  const [input, setInput] = useState("");
  const [emojiOpen, setEmojiOpen] = useState(false);
  const dispatch = useDispatch();
  const { darkmode } = useSelector((store: RootState) => store.setting);
  const { users, messages } = useSelector((store: RootState) => store.chat);
  return (
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
          bgcolor: "white",
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
          placeholder="Type Message Here ..."
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
          <Tooltip title="image" arrow>
            <label
              htmlFor="input-image"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.2rem",
              }}
            >
              <CollectionsIcon sx={{ color: "#cfd0d1", cursor: "pointer" }} />
              <input
                type="file"
                accept="image/*"
                id="input-image"
                style={{ display: "none" }}
              />
            </label>
          </Tooltip>
          <Tooltip title="Attach file" arrow>
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

          <Tooltip title="Open emoji tab" arrow>
            <IconButton
              onClick={() => {
                setEmojiOpen(true);
              }}
            >
              <EmojiEmotionsIcon sx={{ color: "#cfd0d1", cursor: "pointer" }} />
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
          <Tooltip title="Send" arrow>
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
  );
};

export default ChatInput;
