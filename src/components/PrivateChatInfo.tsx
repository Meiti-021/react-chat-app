import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import PrivateInfoDetail from "./PrivateInfoDetail";
import { UserType } from "../utils/users";
import PrivateChatInfoAction from "./PrivateChatInfoAction";
const PrivateChatInfo = ({ user }: { user: UserType }) => {
  const info = (
    <Box
      component={"div"}
      sx={{
        width: { xs: "100vw", sm: "25rem" },
        height: "100vh",
        background: "white",
      }}
    >
      <Box
        sx={{
          p: 2,
          height: "18rem",
          borderBottom: "1px solid #EAEDF3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          position: "relative",
        }}
      >
        <IconButton
          onClick={() => {
            setOpen(false);
          }}
          sx={{ position: "absolute", top: 10, left: 10 }}
        >
          <CloseIcon />
        </IconButton>
        <PrivateChatInfoAction />
        <Avatar
          src={`/assets/users/${user?.profile_picture}`}
          sx={{
            width: "6rem",
            height: "6rem",
            background:
              "linear-gradient(90deg, rgba(97,255,251,1) 6%, rgba(12,103,121,1) 100%)",
          }}
        />
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: "1.1rem",
            textTransform: "capitalize",
            textAlign: "center",
            fontFamily: "Public Sans",
            fontWeight: 600,
          }}
        >
          {user.username}
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: "0.9375rem",
            textTransform: "capitalize",
            textAlign: "center",
            fontFamily: "Public Sans",
            fontWeight: 400,
            color: "#7a7f9a",
            mt: -2,
          }}
        >
          {user.last_activity}
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            fontFamily: "Public Sans",
            fontWeight: 400,
            color: "#7a7f9a",
            mt: 1,
            textAlign: "center",
          }}
        >
          {user.biography}
        </Typography>
      </Box>
      <Box sx={{ padding: "2rem 1.5rem" }}>
        <PrivateInfoDetail user={user} />
      </Box>
    </Box>
  );
  const [Open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!Open);
  };
  return (
    <>
      <Box
        component={"div"}
        onClick={handleDrawerToggle}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          cursor: "pointer",
        }}
      >
        <Avatar
          src={`/assets/users/${user.profile_picture}`}
          sx={{
            width: "2.2rem",
            height: "2.2rem",
            background:
              "linear-gradient(90deg, rgba(97,255,251,1) 6%, rgba(12,103,121,1) 100%)",
          }}
        />
        <Stack direction={"column"}>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 500,
              textTransform: "uppercase",
              fontFamily: "Public Sans",
            }}
          >
            {user?.username}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.7rem",
              fontWeight: 500,
              textTransform: "uppercase",
              color: "#7a7f9a",
              fontFamily: "Public Sans",
            }}
          >
            Active
          </Typography>
        </Stack>
      </Box>
      <Drawer
        variant="temporary"
        open={Open}
        anchor="right"
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on .
        }}
      >
        {info}
      </Drawer>
    </>
  );
};

export default PrivateChatInfo;
