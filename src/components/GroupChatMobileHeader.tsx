import React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import CallIcon from "@mui/icons-material/Call";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const GroupChatMobileHeader = ({
  participants,
  group_name,
  group_profile,
}: {
  participants: string[];
  group_name: string | null;
  group_profile: string | null;
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
          <Link to="/">
            <ArrowBackIcon />
          </Link>
        </Box>
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
