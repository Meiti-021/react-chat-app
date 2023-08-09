import Grid from "@mui/material/Grid";
import { chats } from "../utils/chats";
import ChatCard from "./ChatCard";
import { Box, Typography } from "@mui/material";
import { Outlet, Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import SelectChat from "./SelectChat";

const Conversations = () => {
  return (
    <Grid container sx={{ width: "100%", height: "100%" }}>
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
          <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
            ALL CONVERSATIONS
          </Typography>
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
        xs={0}
        sm={6}
        md={8}
        lg={9}
        height={"100%"}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Conversations;
