import { Box, IconButton, Tooltip } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CollectionsIcon from "@mui/icons-material/Collections";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

const ChatInput = () => {
  const [input, setInput] = useState("");
  const [emojiOpen, setEmojiOpen] = useState(false);
  return (
    <Box
      component={"form"}
      sx={{
        height: "3.5rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid #EAEDF3",
        position: "sticky",
        bottom: "0",
        padding: "1rem",
        marginTop: "auto",
        background: "white",
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
          <EmojiPicker
            onEmojiClick={(emojiData) => {
              setInput(input + emojiData.emoji);
            }}
          />
        </div>
        <Tooltip title="Send" arrow>
          <IconButton color="primary">
            <SendIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default ChatInput;
