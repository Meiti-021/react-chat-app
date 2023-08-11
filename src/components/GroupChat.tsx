import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import bg from "../assets/bg.jpg";
import HistoryIcon from "@mui/icons-material/History";
import { ChatType } from "../utils/chats";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CallIcon from "@mui/icons-material/Call";
import { messageFind, userFind } from "../utils/utils";
import { useEffect, useState } from "react";
import { MessageType } from "../utils/messages";
import moment from "moment";
import LogoutIcon from "@mui/icons-material/Logout";
import Message from "./Message";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
const GroupChat = ({
  participants,
  messages,
  group_name,
  group_profile,
}: ChatType) => {
  const [organizedMessages, setOrganizedMessages] = useState<
    [string, MessageType[]][]
  >([]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
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
        height: "100%",
        overflow: "scroll",
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        component={"div"}
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: { xs: "0.5rem", sm: "2rem" },
          borderBottom: "1px solid #EAEDF3",
          height: "3.5rem",
          position: "sticky",
          width: "100%",
          top: "0",
          background: "white",
        }}
      >
        <Box
          component={"div"}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <Box
            sx={{
              fontSize: "0.7rem",
              fontWeight: "bold",
              display: { xs: "flex", sm: "none" },
            }}
          >
            <IconButton
              onClick={() => {
                navigate(-1);
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Box>
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
            display: { xs: "flex", sm: "none" },
          }}
        >
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={handleClose}
                sx={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                {" "}
                <CallIcon sx={{ fontSize: "1.2rem" }} /> Call
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <HistoryIcon sx={{ fontSize: "1.2rem" }} /> Clear History
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <LogoutIcon sx={{ fontSize: "1.2rem" }} /> Leave Group
              </MenuItem>
            </Menu>
          </div>
        </Box>
      </Box>
      <Box
        component={"div"}
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "0.5rem",
          borderBottom: "1px solid #EAEDF3",
          height: "3.5rem",
          position: "sticky",
          top: "0",
          width: "inherite",
          background: "white",
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
            display: { sm: "none", md: "flex" },
            gap: "0.5rem",
          }}
          component={"div"}
        >
          <Box sx={{ display: "flex" }} component={"div"}>
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
        <Box component={"div"} sx={{ display: { sm: "flex", md: "none" } }}>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={handleClose}
                sx={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                {" "}
                <CallIcon sx={{ fontSize: "1.2rem" }} /> Call
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <HistoryIcon sx={{ fontSize: "1.2rem" }} /> Clear History
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <LogoutIcon sx={{ fontSize: "1.2rem" }} /> Leave Group
              </MenuItem>
            </Menu>
          </div>
        </Box>
      </Box>
      <Box component={"div"} sx={{ height: "100%" }}>
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
      <Box
        component={"form"}
        sx={{
          height: "3.5rem",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #EAEDF3",
          position: "sticky",
          bottom: "0",
          padding: "1rem",
          marginTop: "auto",
        }}
      >
        <input
          type="text"
          placeholder="Type Message Here ..."
          style={{ border: "none", width: "100%", height: "100%" }}
        />
        <Box></Box>
      </Box>
    </Box>
  );
};

export default GroupChat;
