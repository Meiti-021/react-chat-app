import { Box, Typography } from "@mui/material";
import { messageFind } from "../utils/utils";
import { useEffect, useState } from "react";
import { MessageType } from "../utils/messages";
import moment from "moment";
import Message from "./Message";
import ChatBodySkeleton from "./ChatBodySkeleton";
const ChatBody = ({ messages }: { messages: string[] }) => {
  const [organizedMessages, setOrganizedMessages] = useState<
    [string, MessageType[]][]
  >([]);
  const [loading, setLoading] = useState(true);

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
    const pureOrganizedArr: ([string, MessageType[]] | undefined)[] =
      orginizedArray.filter((item) => {
        return item !== undefined;
      });
    const finalArray: [string, MessageType[]][] = pureOrganizedArr.filter(
      (item): item is [string, MessageType[]] => {
        return item !== undefined;
      }
    );
    finalArray.sort((a, b) => {
      return a && b ? Number(a[0]) - Number(b[0]) : 0;
    });
    setOrganizedMessages(finalArray);
    setLoading(false);
  }, [messages]);

  if (loading) {
    return <ChatBodySkeleton />;
  }
  return (
    <Box component={"div"} sx={{ height: "100%" }}>
      {organizedMessages.map((item, index) => {
        if (item !== undefined) {
          return (
            <Box key={item[0] + index} sx={{ paddingTop: "10px" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                  color: "#2CC641",
                  backgroundColor: "#D3FFD9",
                  paddingY: "5px",
                  paddingX: "15px",
                  width: "5rem",
                  borderRadius: "7px",
                  m: "0 auto",
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
  );
};

export default ChatBody;
