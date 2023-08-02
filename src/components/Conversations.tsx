import Grid from "@mui/material/Grid";
import { chats } from "../utils/chats";
import { messages } from "../utils/messages";
import { users } from "../utils/users";
import ChatCard from "./ChatCard";

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
        sx={{ border: "1px solid blue", overflow: "auto" }}
      >
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
