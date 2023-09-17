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
import { useSelector } from "react-redux";
import { RootState } from "../store";
const GroupChatInfo = ({
  participants,
  group_name,
  group_profile,
  description,
}: {
  participants: UserType[];
  group_name: string | null;
  group_profile: string | null;
  description: string | null;
}) => {
  const { darkmode } = useSelector((store: RootState) => store.setting);
  const info = (
    <Box
      component={"div"}
      sx={{
        width: { xs: "100vw", sm: "25rem" },
        height: "100vh",
        background: darkmode ? "#1D2733" : "white",
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
          sx={{
            width: "6rem",
            height: "6rem",
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 6%, rgba(9,121,22,1) 39%, rgba(0,212,255,1) 100%)",
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
            color: darkmode ? "lightgrey" : "#7a7f9a",
            mt: -2,
          }}
        >
          {participants.length} Members
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            fontFamily: "Public Sans",
            fontWeight: 400,
            color: darkmode ? "white" : "#7a7f9a",
            mt: 1,
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box>
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
          sx={{
            width: 40,
            height: 40,
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 6%, rgba(9,121,22,1) 39%, rgba(0,212,255,1) 100%)",
          }}
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
        PaperProps={{ sx: { background: darkmode ? "#1D2733" : "white" } }}
      >
        {info}
      </Drawer>
    </>
  );
};

export default GroupChatInfo;
