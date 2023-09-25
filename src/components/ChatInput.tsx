import { Box, IconButton, Tooltip } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CollectionsIcon from "@mui/icons-material/Collections";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../services/chatSlice";
import moment from "moment";
import { RootState } from "../store";
const ChatInput = ({
  chat_id,
  replay,
}: {
  chat_id: string;
  replay: undefined | string;
}) => {
  const [input, setInput] = useState("");
  const [emojiOpen, setEmojiOpen] = useState(false);
  const dispatch = useDispatch();
  const { darkmode } = useSelector((store: RootState) => store.setting);
  return (
    <>
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
          marginTop: "auto",
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
                    },
                  })
                );
              }}
            >
              <SendIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </>
  );
};

export default ChatInput;
