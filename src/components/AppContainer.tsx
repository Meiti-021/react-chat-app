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
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Avatar, Button, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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
import Setting from "./Setting";
import SettingCenter from "./SettingCenter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { logOut, switchDarkmode } from "../services/settingSlice";
import HireCenter from "./HireCenter";

const drawerWidth = 270;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function AppContainer(props: Props) {
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
  const { users } = useSelector((store: RootState) => store.chat);
  const location = useLocation();
  const { id } = useParams();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [filterType, setFilterType] = React.useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (
      location.pathname.includes("/setting") === false &&
      location.pathname.includes("/contacts") === false &&
      location.pathname.includes("/contact-us") === false &&
      location.pathname.includes("/help") === false &&
      location.pathname.includes("/channels") === false &&
      location.pathname.includes("/bots") === false &&
      location.pathname.includes("/hire-me") === false &&
      filterType === ""
    ) {
      setFilterType("conversations");
    }
    setMobileOpen(false);
  }, [location.pathname, filterType, id, language]);
  const drawer = (
    <div style={{ height: "100%" }}>
      <Toolbar sx={{ bgcolor: darkmode ? "#212D3B" : "#008EE4" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            overflow: "hidden",
          }}
        >
          <Avatar src={`${users[0].profile_picture}`} />
          <Stack spacing={-0.5} sx={{ overflow: "hidden", width: "100%" }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                width: "100%",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {users[0].username + " " + users[0].userLastName}
            </Typography>
            <Typography
              sx={{
                color: darkmode ? "#7A848F" : "lightgray",
                fontSize: "0.8rem",
              }}
            >
              {users[0].career}
            </Typography>
          </Stack>
        </Box>
      </Toolbar>
      <Divider sx={{ bgcolor: "#7A848F" }} />
      {language.menuItems.map((item, index) => {
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
                            color:
                              isActive && darkmode
                                ? "white"
                                : isActive && !darkmode
                                ? "white"
                                : !isActive && darkmode
                                ? "white"
                                : "black",
                            backgroundColor:
                              isActive || isPending ? "#008EE4" : undefined,
                            width: "100%",
                            borderRadius: "5px",
                          };
                        }
                      : {
                          padding: "0.2rem 1rem ",
                          display: "flex",
                          alignItems: "center",
                          textDecoration: "none",
                          color:
                            filterType === element.id.toLocaleLowerCase() &&
                            darkmode
                              ? "white"
                              : filterType === element.id.toLocaleLowerCase() &&
                                !darkmode
                              ? "white"
                              : filterType !== element.id.toLocaleLowerCase() &&
                                darkmode
                              ? "white"
                              : "black",
                          backgroundColor:
                            filterType === element.id.toLowerCase()
                              ? "#008EE4"
                              : undefined,
                          width: "100%",
                          borderRadius: "5px",
                          textTransform: "capitalize",
                        }
                  }
                  to={
                    element.id === "Conversations" ? "/" : `/${element.address}`
                  }
                  onClick={
                    element.type === Button
                      ? () => {
                          if (element.id === "Log out") {
                            navigate("/");
                            setFilterType("");
                            dispatch(logOut());
                          } else if (element.id === "Dark mode") {
                            dispatch(switchDarkmode());
                          } else {
                            navigate("/");
                            setFilterType(element.id.toLowerCase());
                          }
                        }
                      : () => {
                          setFilterType("");
                        }
                  }
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {element.icon}
                  </ListItemIcon>
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
          bgcolor: "white",
          display: { xs: "block", sm: "none" },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: darkmode ? "#212D3B" : "#008EE4",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { xl: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{
              color: darkmode ? "#9BA4B0" : "white",
              fontWeight: "bold",
              letterSpacing: 3,
              mt: 0.2,
              textTransform: "uppercase",
            }}
          >
            {language.meitigram}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { xl: "none" },
              color: darkmode ? "#9BA4B0" : "white",
              marginLeft: "auto",
            }}
          >
            <SearchIcon sx={{ fontSize: "22px" }} />
          </IconButton>
        </Toolbar>
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
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: darkmode ? "#1D2733" : undefined,
          }}
        >
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
        <Divider sx={{ bgcolor: darkmode ? "#7A848F" : "#EAEDF3" }} />
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
          PaperProps={{
            sx: {
              bgcolor: darkmode ? "#1D2733" : "white",
              borderRight: darkmode ? "1px solid #7A848F" : undefined,
            },
          }}
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
          PaperProps={{
            sx: {
              bgcolor: darkmode ? "#1D2733" : "white",
              borderRight: darkmode ? "1px solid #7A848F" : undefined,
            },
          }}
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
          paddingTop: { xs: "56px", sm: "64px" },
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
          <Route path="/setting" element={<SettingCenter />}>
            <Route element={<Setting />} path="/setting/:section" />
            <Route element={<HelpAnimation />} path="/setting" />
          </Route>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contact-us" element={<ContactCenter />} />
          <Route path="/hire-me" element={<HireCenter />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/bots" element={<Bots />} />
        </Routes>
      </Box>
    </Box>
  );
}
