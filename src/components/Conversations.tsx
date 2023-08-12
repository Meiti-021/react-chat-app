import Grid from "@mui/material/Grid";
import { chats } from "../utils/chats";
import ChatCard from "./ChatCard";
import { Box, Drawer, Typography } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
const Conversations = () => {
  const { pathname } = useLocation();
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
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
            padding: "15px 20px",
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
      <Drawer
        open={pathname !== "/" ? true : false}
        sx={{
          display: { xs: "block", sm: "none" },
          width: "100vw",
          "&::-webkit-scrollbar": { display: "none" },
        }}
        PaperProps={{
          sx: { width: "100vw", "&::-webkit-scrollbar": { display: "none" } },
        }}
      >
        <Outlet />
      </Drawer>
    </Grid>
  );
};

export default Conversations;
