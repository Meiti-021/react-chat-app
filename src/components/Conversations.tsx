import Grid from "@mui/material/Grid";
import { chats } from "../utils/chats";
import { messages } from "../utils/messages";
import { users } from "../utils/users";
import ChatCard from "./ChatCard";
import { Box, Typography } from "@mui/material";

const Conversations = () => {
  return (
    <Grid
      container
      sx={{ width: "100%", height: "100%", border: "3px solid green" }}
    >
      <Grid
        item
        lg={3}
        height={"100%"}
        sx={{
          border: "1px solid blue",
          overflow: "auto",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Box
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: "2rem",
            borderBottom: "1px solid #EAEDF3",
            height: "3.5rem",
          }}
        >
          <Typography sx={{ fontSize: "0.9rem" }}>All Conversations</Typography>
          <Box
            sx={{
              fontSize: "0.7rem",
              fontWeight: "bold",
              color: "#2CC641",
              backgroundColor: "#D3FFD9",
              paddingY: "5px",
              paddingX: "15px",
              borderRadius: "5px",
            }}
          >
            NEW MESSAGES
          </Box>
        </Box>
        {chats.map((item) => {
          return <ChatCard key={item.chat_id} {...item} />;
        })}
      </Grid>
      <Grid
        item
        lg={9}
        height={"100%"}
        sx={{ border: "1px solid black" }}
      ></Grid>
    </Grid>
  );
};

export default Conversations;
