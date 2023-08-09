import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import { ChatType } from "../utils/chats";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CallIcon from "@mui/icons-material/Call";
import { messageFind, userFind } from "../utils/utils";
import { useEffect, useState } from "react";
import { MessageType } from "../utils/messages";
import moment from "moment";
import Message from "./Message";
const GroupChat = ({
  chat_id,
  peer_private,
  participants,
  messages,
  group_name,
  group_profile,
}: ChatType) => {
  const [organizedMessages, setOrganizedMessages] = useState<
    [string, MessageType[]][]
  >([]);
  useEffect(() => {
    const original: (MessageType | undefined)[] = messages.map((item) => {
      return messageFind(item);
    });
    const pureOrginal: MessageType[] = original.filter(
      (item): item is MessageType => {
        return item !== undefined;
      }
    );

    const orginizedSet: Set<string> = new Set();
    pureOrginal.forEach((item) => {
      if (item) {
        orginizedSet.add(item.timestamp.split(" ")[0]);
      }
    });
    console.log("orginizedSet :", orginizedSet);
    const orginizedArray: ([string, MessageType[]] | undefined)[] = Array.from(
      orginizedSet
    ).map((item) => {
      if (item) {
        const filteredArray = original.filter((elem) => {
          return (
            moment(elem?.timestamp).format("YYYY,MM,DD") ===
            moment(item).format("YYYY,MM,DD")
          );
        });
        const pureFilteredArray = filteredArray.filter(
          (elem): elem is MessageType => {
            return elem !== undefined;
          }
        );

        return [moment(item).format("YYYY,MM,DD"), pureFilteredArray];
      }
    });
    console.log("orginizedArray :", orginizedArray);

    const pureOrganizedArr: ([string, MessageType[]] | undefined)[] =
      orginizedArray.filter((item) => {
        return item !== undefined;
      });
    console.log("pureOrganizedArr: ", pureOrganizedArr);
    const finalArray: [string, MessageType[]][] = pureOrganizedArr.filter(
      (item): item is [string, MessageType[]] => {
        return item !== undefined;
      }
    );
    console.log("final before sort", finalArray);

    finalArray.sort((a, b) => {
      return a && b ? Number(a[0]) - Number(b[0]) : 0;
    });
    console.log("final", finalArray);
    setOrganizedMessages(finalArray);
  }, [messages]);
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        height: "100%",
        overflow: "scroll",
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
        <Box
          component={"div"}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <Avatar
            src={`/assets/users/${group_profile}`}
            sx={{ width: 30, height: 30 }}
          />
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            {group_name}
          </Typography>
        </Box>
        <Box
          sx={{
            fontSize: "0.7rem",
            fontWeight: "bold",
            paddingY: "5px",
            paddingX: "15px",
            borderRadius: "5px",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <AvatarGroup
              max={4}
              sx={{
                "& .MuiAvatar-root": { width: 30, height: 30, fontSize: 12 },
              }}
            >
              {participants.map((item, index) => {
                return (
                  <Avatar
                    alt={userFind(item)?.username}
                    src={`/assets/users/${userFind(item)?.profile_picture}`}
                    key={"gruop-memeber" + index}
                  />
                );
              })}
            </AvatarGroup>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "0.7rem",
              borderLeft: "1px solid #d0d2d6",
              paddingLeft: "1rem",
              marginLeft: "0.5rem",
              alignItems: "center",
            }}
          >
            <CallIcon sx={{ color: "#d0d2d6" }} />
            <NotificationsIcon sx={{ color: "#d0d2d6" }} />
            <SettingsIcon sx={{ color: "#d0d2d6" }} />
          </Box>
        </Box>
      </Box>
      <Box component={"div"}>
        {organizedMessages.map((item, index) => {
          if (item !== undefined) {
            return (
              <Box key={item[0] + index}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "0.7rem",
                    fontWeight: "bold",
                    color: "#2CC641",
                    backgroundColor: "#D3FFD9",
                    paddingY: "5px",
                    paddingX: "15px",
                  }}
                >
                  {moment(item[0]).format("YY,MM,DD")}
                </Typography>
                <Box>
                  {item[1].map((mess) => {
                    return <Message {...mess} key={mess.message_id} />;
                  })}
                </Box>
              </Box>
            );
          }
        })}
      </Box>
    </Box>
  );
};

export default GroupChat;
