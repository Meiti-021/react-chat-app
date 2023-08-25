import * as React from "react";
import { Avatar, AvatarGroup, Box } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import CallIcon from "@mui/icons-material/Call";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatOptions from "./ChatOptions";
import GroupChatInfo from "./GroupChatInfo";
import { UserType } from "../utils/users";
const GroupChatLargeScreenHeader = ({
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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component={"div"}
      sx={{
        display: { xs: "none", sm: "flex" },
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: "0.5rem",
        borderBottom: "1px solid #EAEDF3",
        height: "3.5rem",
        width: "inherite",
        background: "white",
        zIndex: "5",
      }}
    >
      <Box
        component={"div"}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          background: "white",
        }}
      >
        <GroupChatInfo
          participants={participants}
          group_name={group_name}
          group_profile={group_profile}
          description={description}
        />
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
                  alt={item.username}
                  src={`/assets/users/${item.profile_picture}`}
                  key={"gruop-memeber" + index}
                  sx={{
                    background:
                      "linear-gradient(90deg, rgba(97,255,251,1) 6%, rgba(12,103,121,1) 100%)",
                    bgcolor: "white",
                  }}
                />
              );
            })}
          </AvatarGroup>
        </Box>
        <ChatOptions participants={participants} group_name={group_name} />
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
  );
};

export default GroupChatLargeScreenHeader;
