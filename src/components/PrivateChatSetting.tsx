import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryIcon from "@mui/icons-material/History";
import CallIcon from "@mui/icons-material/Call";
import BlockIcon from "@mui/icons-material/Block";
import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const PrivateChatSetting = () => {
  const { language } = useSelector((store: RootState) => store.setting);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title="Setting">
        <IconButton onClick={handleClick}>
          <SettingsIcon sx={{ color: "#d0d2d6" }} />
        </IconButton>
      </Tooltip>
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
          <CallIcon sx={{ fontSize: "1.2rem" }} /> r{language.call}
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", alignItems: "center", gap: "15px" }}
        >
          <HistoryIcon sx={{ fontSize: "1.2rem" }} /> r{language.clearHistory}
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", alignItems: "center", gap: "15px" }}
        >
          <BlockIcon sx={{ fontSize: "1.2rem" }} /> r{language.blockUser}
        </MenuItem>
      </Menu>
    </>
  );
};

export default PrivateChatSetting;
