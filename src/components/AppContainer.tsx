import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ChatIcon from "@mui/icons-material/Chat";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import CampaignIcon from "@mui/icons-material/Campaign";
import CallIcon from "@mui/icons-material/Call";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SettingsIcon from "@mui/icons-material/Settings";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, Route, Routes } from "react-router-dom";
import { Avatar, Stack } from "@mui/material";
import Conversations from "./Conversations";
import Chat from "./Chat";
import SelectChat from "./SelectChat";

const drawerWidth = 270;

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        title: "Conversations",
        icon: <ChatIcon sx={{ color: "white" }} />,
      },
      {
        title: "Contacts",
        icon: <PermContactCalendarIcon sx={{ color: "white" }} />,
      },
      {
        title: "Channels",
        icon: <CampaignIcon sx={{ color: "white" }} />,
      },
      {
        title: "Calls",
        icon: <CallIcon sx={{ color: "white" }} />,
      },
    ],
  },
  {
    title: "SUPPORT",
    items: [
      {
        title: "Need help?",
        icon: <HelpOutlineIcon sx={{ color: "white" }} />,
      },
      {
        title: "Contact us",
        icon: <HeadsetMicIcon sx={{ color: "white" }} />,
      },
    ],
  },
  {
    title: "SETTING",
    items: [
      {
        title: "Account",
        icon: <SettingsIcon sx={{ color: "white" }} />,
      },
      {
        title: "Dark mode",
        icon: <Brightness4Icon sx={{ color: "white" }} />,
      },
      {
        title: "Log out",
        icon: <LogoutIcon sx={{ color: "white" }} />,
      },
    ],
  },
];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function AppContainer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ height: "100%" }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Avatar src="/assets/users/bob_profile.jpg" />
          <Stack spacing={-0.5}>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              YOUR NAME
            </Typography>
            <Typography sx={{ color: "#7A848F", fontSize: "0.8rem" }}>
              web developer
            </Typography>
          </Stack>
        </Box>
      </Toolbar>
      <Divider sx={{ bgcolor: "#7A848F" }} />
      {menuItems.map((item, index) => {
        return (
          <List
            sx={{
              marginTop: index === menuItems.length - 2 ? "100%" : "1rem",
              padding: "1rem 0.5rem",
            }}
          >
            <Typography
              sx={{
                marginBottom: "1rem",
                color: "#7A848F",
                fontWeight: "bold",
                marginLeft: "1rem",
              }}
            >
              {item.title}
            </Typography>
            {item.items.map((element) => (
              <ListItem
                key={element.title}
                sx={{
                  padding: "0 0",
                  display: "flex",
                  justifyContent: "flex-start",
                  color: "white",
                }}
              >
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      padding: "0.2rem 1rem ",
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "white",
                      backgroundColor: isActive ? "#00b718" : undefined,
                      width: "100%",
                      borderRadius: "5px",
                    };
                  }}
                  to={
                    element.title === "Conversations"
                      ? "/"
                      : `/${element.title.toLocaleLowerCase()}`
                  }
                >
                  <ListItemIcon>{element.icon}</ListItemIcon>
                  <ListItemText primary={element.title} />
                </NavLink>
              </ListItem>
            ))}
          </List>
        );
      })}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: "64px",
          bgcolor: "white",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          salam
        </Toolbar>
        <Divider sx={{ bgcolor: "#EAEDF3" }} />
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100%",
            },
          }}
          PaperProps={{ sx: { bgcolor: "#1e2933" } }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100%",
            },
          }}
          PaperProps={{ sx: { bgcolor: "#1e2933" } }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,

          width: { sm: `calc(100% - ${drawerWidth}px)` },
          paddingTop: "64px",
          border: "1px solid red",
          height: "100vh",
        }}
      >
        <Routes>
          <Route path="/" element={<Conversations />}>
            <Route element={<Chat />} path="/:chatID" />
            <Route element={<SelectChat />} path="/" />
          </Route>
        </Routes>
      </Box>
    </Box>
  );
}
