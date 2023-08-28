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
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SettingsIcon from "@mui/icons-material/Settings";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { Avatar, Button, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupIcon from "@mui/icons-material/Group";
import Conversations from "./Conversations";
import Chat from "./Chat";
import SelectChat from "./SelectChat";
import AppLargeScreenHeader from "./AppLargeScreenHeader";
import Contacts from "./Contacts";
import Channels from "./Channels";
import Bots from "./Bots";
import HelpCenter from "./HelpCenter";
import Help from "./Help";
import HelpAnimation from "./HelpAnimation";
import ContactCenter from "./ContactCenter";

const drawerWidth = 270;

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        title: "Conversations",
        icon: <ChatIcon sx={{ color: "white" }} />,
        type: Button,
        address: "",
      },

      {
        title: "Groups",
        icon: <GroupsIcon sx={{ color: "white" }} />,
        type: Button,
        address: "",
      },
      {
        title: "Privates",
        icon: <GroupIcon sx={{ color: "white" }} />,
        type: Button,
        address: "",
      },
      {
        title: "Contacts",
        icon: <PermContactCalendarIcon sx={{ color: "white" }} />,
        type: NavLink,
        address: "contacts",
      },

      {
        title: "Channels",
        icon: <CampaignIcon sx={{ color: "white" }} />,
        type: NavLink,
        address: "channels",
      },
      {
        title: "Bots",
        icon: <SmartToyIcon sx={{ color: "white" }} />,
        type: NavLink,
        address: "bots",
      },
    ],
  },
  {
    title: "SUPPORT",
    items: [
      {
        title: "Need help?",
        icon: <HelpOutlineIcon sx={{ color: "white" }} />,
        type: NavLink,
        address: "help",
      },
      {
        title: "Contact us",
        icon: <HeadsetMicIcon sx={{ color: "white" }} />,
        type: NavLink,
        address: "contact-us",
      },
    ],
  },
  {
    title: "SETTING",
    items: [
      {
        title: "Account",
        icon: <SettingsIcon sx={{ color: "white" }} />,
        type: Button,
        address: "",
      },
      {
        title: "Dark mode",
        icon: <Brightness4Icon sx={{ color: "white" }} />,
        type: Button,
        address: "",
      },
      {
        title: "Log out",
        icon: <LogoutIcon sx={{ color: "white" }} />,
        type: Button,
        address: "",
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
  const [filterType, setFilterType] = React.useState<string>("conversations");
  const navigate = useNavigate();
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
              // marginTop: index === menuItems.length - 2 ? "100%" : "1rem",
              padding: "1rem 0.5rem",
            }}
            key={"menu" + index}
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
                <Box
                  component={element.type}
                  style={
                    element.type === NavLink
                      ? ({ isActive, isPending }) => {
                          return {
                            padding: "0.2rem 1rem ",
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            color: "white",
                            backgroundColor:
                              isActive || isPending ? "#00b718" : undefined,
                            width: "100%",
                            borderRadius: "5px",
                          };
                        }
                      : {
                          padding: "0.2rem 1rem ",
                          display: "flex",
                          alignItems: "center",
                          textDecoration: "none",
                          color: "white",
                          backgroundColor:
                            filterType === element.title.toLowerCase()
                              ? "#00b718"
                              : undefined,
                          width: "100%",
                          borderRadius: "5px",
                          textTransform: "capitalize",
                        }
                  }
                  to={
                    element.title === "Conversations"
                      ? "/"
                      : `/${element.address}`
                  }
                  onClick={
                    element.type === Button
                      ? () => {
                          navigate("/");
                          setFilterType(element.title.toLowerCase());
                        }
                      : () => {
                          setFilterType("");
                        }
                  }
                >
                  <ListItemIcon>{element.icon}</ListItemIcon>
                  <ListItemText primary={element.title} />
                </Box>
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
          width: { xl: `calc(100% - ${drawerWidth}px)` },
          ml: { xl: `${drawerWidth}px` },
          height: "64px",
          bgcolor: "white",
          display: { xs: "block", sm: "none" },
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xl: "none" }, color: "#9BA4B0" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{
              color: "#1e2933",
              fontWeight: "bold",
              letterSpacing: 3,
              mt: 0.2,
            }}
          >
            MEITIGRAM MOBILE
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { xl: "none" },
              color: "#9BA4B0",
              marginLeft: "auto",
            }}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
        <Divider sx={{ bgcolor: "#EAEDF3" }} />
      </AppBar>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { xl: `calc(100% - ${drawerWidth}px)` },
          ml: { xl: `${drawerWidth}px` },
          height: "64px",
          bgcolor: "white",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xl: "none" }, color: "#9BA4B0" }}
          >
            <MenuIcon />
          </IconButton>
          <AppLargeScreenHeader />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { xl: "none" },
              color: "#9BA4B0",
              marginLeft: "auto",
            }}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
        <Divider sx={{ bgcolor: "#EAEDF3" }} />
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { xl: drawerWidth },
          flexShrink: { xl: 0 },
        }}
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
            display: { xs: "block", xl: "none" },
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
            display: { xs: "none", xl: "block" },
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
          width: { xl: `calc(100% - ${drawerWidth}px)`, xs: "100vw" },
          paddingTop: "64px",
          height: "100vh",
        }}
      >
        <Routes>
          <Route path="/" element={<Conversations type={filterType} />}>
            <Route element={<Chat />} path="/:chatID" />
            <Route element={<SelectChat />} path="/" />
          </Route>
          <Route path="/help" element={<HelpCenter />}>
            <Route element={<Help />} path="/help/:section" />
            <Route element={<HelpAnimation />} path="/help" />
          </Route>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contact-us" element={<ContactCenter />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/bots" element={<Bots />} />
        </Routes>
      </Box>
    </Box>
  );
}
