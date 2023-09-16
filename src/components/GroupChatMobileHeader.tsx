import React from "react";
import { Box } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import CallIcon from "@mui/icons-material/Call";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import GroupChatInfo from "./GroupChatInfo";
import { UserType } from "../utils/users";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const GroupChatMobileHeader = ({
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
  const { darkmode } = useSelector((store: RootState) => store.setting);
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
        display: { xs: "flex", sm: "none" },
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: { xs: "0.5rem", sm: "2rem" },
        borderBottom: "1px solid #EAEDF3",
        height: "3.5rem",
        width: "100%",
        background: darkmode ? "#1D2733" : "white",
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
          <Link to="/">
            <ArrowBackIcon />
          </Link>
        </Box>
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
  );
};

export default GroupChatMobileHeader;
