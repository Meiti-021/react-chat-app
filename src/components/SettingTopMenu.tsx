import * as React from "react";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const SettingTopMenu = () => {
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
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
        <MoreVertIcon sx={{ color: "white" }} />
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
          <Link
            to={"/setting/edit-name"}
            style={{
              textDecoration: "none",
              display: "flex",
              color: darkmode ? "white" : "black",
            }}
          >
            <ListItemIcon>
              <EditIcon sx={{ fontSize: "1.2rem" }} />
            </ListItemIcon>
            <ListItemText>{language.editName}</ListItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              display: "flex",
              color: darkmode ? "white" : "black",
            }}
          >
            <ListItemIcon>
              <AddAPhotoIcon sx={{ fontSize: "1.2rem" }} />
            </ListItemIcon>
            <ListItemText>{language.setProfilePhoto} </ListItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to={"/setting/logout"}
            style={{
              textDecoration: "none",
              display: "flex",
              color: darkmode ? "white" : "black",
            }}
          >
            <ListItemIcon>
              <LogoutIcon sx={{ fontSize: "1.2rem" }} />
            </ListItemIcon>
            <ListItemText>{language.logOut} </ListItemText>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default SettingTopMenu;
