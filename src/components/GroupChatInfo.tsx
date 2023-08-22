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
import GroupInfoDetail from "./GroupInfoDetail";
import { UserType } from "../utils/users";
const GroupChatInfo = ({
  participants,
  group_name,
  group_profile,
}: {
  participants: UserType[];
  group_name: string | null;
  group_profile: string | null;
}) => {
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
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <CloseIcon />
        </IconButton>
        <Avatar
          src={`/assets/users/${group_profile}`}
          sx={{ width: "6rem", height: "6rem" }}
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
          {group_name}
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
          {participants.length} Members
        </Typography>
      </Box>
      <Box sx={{ padding: "2rem 1.5rem" }}>
        <Typography
          sx={{
            fontSize: "1rem",
            fontFamily: "Public Sans",
            fontWeight: 400,
            color: "#7a7f9a",
            mt: -2,
          }}
        >
          If several languages coalesce, the grammar of the resulting language
          is more simple and regular than that of the individual.
        </Typography>
        <GroupInfoDetail participants={participants} />
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
          src={`/assets/users/${group_profile}`}
          sx={{ width: 30, height: 30 }}
        />
        <Stack direction={"column"}>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            {group_name}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.7rem",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            {participants.length} memebers
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

export default GroupChatInfo;
