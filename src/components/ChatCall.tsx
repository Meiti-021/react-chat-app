import * as React from "react";
import {
  AvatarGroup,
  Box,
  IconButton,
  Avatar,
  Typography,
  Stack,
  Tooltip,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { UserType } from "../utils/users";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ChatCall = ({
  participants,
  group_name,
}: {
  participants: UserType[];
  group_name: string | null;
}) => {
  const [call, setCall] = React.useState<boolean>(false);
  const handleCall = () => {
    setCall(!call);
  };
  return (
    <>
      <Tooltip title="Voice Call">
        <IconButton onClick={handleCall}>
          <CallIcon sx={{ color: "#d0d2d6" }} />
        </IconButton>
      </Tooltip>
      <Dialog
        open={call}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCall}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box
          component={"div"}
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            paddingY: 10,
            paddingX: 15,
            alignItems: "center",
            gap: 3,
          }}
        >
          <AvatarGroup
            max={4}
            sx={{
              "& .MuiAvatar-root": { width: 70, height: 70, fontSize: 12 },
            }}
          >
            {participants.map((item, index) => {
              return (
                <Avatar
                  alt={item.username}
                  src={`/assets/users/${item.profile_picture}`}
                  key={"gruop-memeber" + index}
                />
              );
            })}
          </AvatarGroup>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography
              sx={{
                fontFamily: "Public Sans",
                fontWeight: 600,
                fontSize: "1.171875rem",
                textTransform: "uppercase",
              }}
            >
              {group_name}
            </Typography>
            <Typography sx={{ color: "#7a7f9a", fontSize: "0.9375rem" }}>
              Start Audio Call
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={2}>
            <IconButton
              onClick={() => {
                setCall(false);
              }}
              sx={{
                padding: 1.7,
                width: 50,
                height: 50,
                bgcolor: "#cb3c5e",
                color: "white",
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => {
                setCall(false);
              }}
              sx={{
                padding: 1.7,
                width: 50,
                height: 50,
                bgcolor: "#05b688",
                color: "white",
              }}
            >
              <CallIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Dialog>
    </>
  );
};

export default ChatCall;
