import * as React from "react";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import BlockIcon from "@mui/icons-material/Block";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import { RootState } from "../store";
import { useSelector } from "react-redux";
const PrivateChatInfoAction = () => {
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
      <IconButton
        sx={{ position: "absolute", top: 10, right: 10 }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <AutoDeleteIcon sx={{ fontSize: "1.2rem" }} />
          </ListItemIcon>
          <ListItemText>{language.autoDeletion}</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MobileScreenShareIcon sx={{ fontSize: "1.2rem" }} />
          </ListItemIcon>
          <ListItemText>{language.shareContact}</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <BlockIcon sx={{ fontSize: "1.2rem" }} />
          </ListItemIcon>
          <ListItemText>{language.blockUser}</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonRemoveIcon sx={{ fontSize: "1.2rem" }} />
          </ListItemIcon>
          <ListItemText>{language.deleteContact}</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default PrivateChatInfoAction;
