import { Avatar, Box, Typography, Stack } from "@mui/material";
import { MessageType } from "../utils/messages";
import { userFind } from "../utils/utils";
import moment from "moment";
import CheckIcon from "@mui/icons-material/Check";

const Message = ({
  message_id,
  content,
  timestamp,
  sender,
  seen,
}: MessageType) => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: sender !== "user1" ? "flex-start" : "flex-end",
      }}
    >
      <Box
        component={"div"}
        sx={{
          width: "70%",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          component={"div"}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.5rem",
          }}
        >
          {sender !== "user1" ? (
            <Box
              component={"div"}
              sx={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <Avatar
                src={`/assets/users/${userFind(sender)?.profile_picture}`}
                sx={{ width: 30, height: 30 }}
              />
              <Typography sx={{ fontWeight: "bold" }}>
                {userFind(sender)?.username}
              </Typography>
            </Box>
          ) : (
            <>
              {" "}
              {seen ? (
                <Stack direction={"row"} alignItems={"center"}>
                  <CheckIcon
                    sx={{
                      color: "#5965DB",
                      marginRight: "-17px",
                      fontSize: "0.8rem",
                    }}
                  />
                  <CheckIcon sx={{ color: "#5965DB", fontSize: "0.8rem" }} />
                </Stack>
              ) : (
                <CheckIcon sx={{ color: "#5965DB", fontSize: "0.8rem" }} />
              )}{" "}
            </>
          )}
          <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
            {moment(timestamp).format("hh:mm")}
          </Typography>
        </Box>
        <Box
          component={"div"}
          sx={{
            width: "100%",
            marginTop: "0.1rem",
            backgroundColor: sender === "user1" ? "#EAEFF4" : "#00B719",
            color: sender === "user1" ? "#51606D" : "#FFF",
            padding: "0.5rem",
            borderRadius: "0.2rem",
          }}
        >
          {content}
        </Box>
      </Box>
    </Box>
  );
};

export default Message;
