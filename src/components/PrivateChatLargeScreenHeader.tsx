import * as React from "react";
import { Box } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import CallIcon from "@mui/icons-material/Call";
import BlockIcon from "@mui/icons-material/Block";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PrivateChatInfo from "./PrivateChatInfo";
import PrivateChatOptions from "./PrivateChatOptions";
import { UserType } from "../utils/users";
const PrivateChatLargeScreenHeader = ({ user }: { user: UserType }) => {
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
        <PrivateChatInfo user={user} />
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
        <PrivateChatOptions user={user} />
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
              <BlockIcon sx={{ fontSize: "1.2rem" }} /> Block user
            </MenuItem>
          </Menu>
        </div>
      </Box>
    </Box>
  );
};

export default PrivateChatLargeScreenHeader;
