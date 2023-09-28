import {
  Box,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Drawer,
  Divider,
  Switch,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
const SettingData = () => {
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
  const [Open, setOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState(false);
  const navigate = useNavigate();
  const [dataUsage, setDataUsage] = useState({
    Music: 102,
    Profile: 37.6,
    video: 29.9,
    other: 28.8,
  });
  const [storageUsage, setStorageUsage] = useState({
    Music: 56.5,
    Profile: 42.7,
    video: 38,
    other: 4.5,
  });

  const handleDrawerToggle = () => {
    setOpen(!Open);
  };
  return (
    <>
      <Box
        sx={{
          height: "3.5rem",
          display: "flex",
          gap: 5,
          alignItems: "center",
          bgcolor: darkmode ? "#1D2733" : "#008EE4",
          color: "white",
          px: 2,
        }}
      >
        <IconButton
          sx={{ color: "white" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography fontSize={"1.1rem"}>
          {language.DataAndStorage.title}
        </Typography>
      </Box>
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          {language.DataAndStorage.diskAndNetworkUsage}
        </Typography>

        <List sx={{ px: 0, mt: 1 }}>
          <ListItem sx={{ p: 0 }}>
            <ListItemIcon>
              <DataUsageIcon />
            </ListItemIcon>
            <ListItemText primary={language.DataAndStorage.StorageUsage} />
            <ListItemSecondaryAction>
              <Button
                onClick={() => {
                  setDrawerContent(false);
                  setOpen(true);
                }}
              >
                {(function () {
                  let total = 0;
                  Object.values(storageUsage).forEach(
                    (item) => (total += item)
                  );
                  return total;
                })()}{" "}
                MB
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary={language.DataAndStorage.DataUsage} />
            <ListItemSecondaryAction>
              <Button
                onClick={() => {
                  setDrawerContent(true);
                  setOpen(true);
                }}
              >
                {(function () {
                  let total = 0;
                  Object.values(dataUsage).forEach((item) => (total += item));
                  return total;
                })()}{" "}
                MB
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          {language.DataAndStorage.AutomaticMediaDownload}
        </Typography>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ px: 0 }}>
            <ListItemText primary={language.DataAndStorage.whenUsinMobile} />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemText
              primary={language.DataAndStorage.whenConnenctedTowifi}
            />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemText primary={language.DataAndStorage.whenRoaming} />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          {language.DataAndStorage.saveToGallery}
        </Typography>
        <List sx={{ p: 0, mt: 2 }}>
          <ListItem sx={{ px: 0 }}>
            <ListItemText primary={language.privates} />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemText primary={language.groups} />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemText primary={language.channels} />
            <ListItemSecondaryAction>
              <Switch defaultChecked />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
      <Drawer
        variant="temporary"
        open={Open}
        anchor="right"
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on .
        }}
        PaperProps={{ sx: { bgcolor: darkmode ? "black" : "white" } }}
      >
        <Box sx={{ width: { xs: "100vw", sm: "400px" }, height: "100vh" }}>
          <Box
            sx={{
              height: "3.5rem",
              display: "flex",
              gap: 5,
              alignItems: "center",
              bgcolor: darkmode ? "#1D2733" : "#008EE4",
              color: "white",
              px: 2,
            }}
          >
            <IconButton
              sx={{ color: "white" }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography fontSize={"1.1rem"}>
              {drawerContent
                ? language.DataAndStorage.DataUsage
                : language.DataAndStorage.StorageUsage}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "15rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 700,
                textAlign: "center",
                color: "#008EE4",
              }}
            >
              {(function () {
                let total = 0;
                Object.values(drawerContent ? dataUsage : storageUsage).forEach(
                  (item) => (total += item)
                );
                return total;
              })()}
              MB
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", textAlign: "center" }}>
              {language.DataAndStorage.StorageUsageTopCaption.split("-")[0]}{" "}
              {(function () {
                let total = 0;
                Object.values(drawerContent ? dataUsage : storageUsage).forEach(
                  (item) => (total += item)
                );
                return total;
              })()}{" "}
              {language.DataAndStorage.StorageUsageTopCaption.split("-")[1]}
            </Typography>
          </Box>

          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "red" }} />
              </ListItemIcon>
              <ListItemText primary="Music" />
              <ListItemSecondaryAction>
                <Typography color="blue">
                  {drawerContent ? dataUsage.Music : storageUsage.Music} MB
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "blue" }} />
              </ListItemIcon>
              <ListItemText primary="Profile Pictures" />
              <ListItemSecondaryAction>
                <Typography color="blue">
                  {drawerContent ? dataUsage.Profile : storageUsage.Profile} MB
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "orange" }} />
              </ListItemIcon>
              <ListItemText primary="Videos" />
              <ListItemSecondaryAction>
                <Typography color="blue">
                  {drawerContent ? dataUsage.video : storageUsage.video} MB
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "greenyellow" }} />
              </ListItemIcon>
              <ListItemText primary="Others" />
              <ListItemSecondaryAction>
                <Typography color="blue">
                  {drawerContent ? dataUsage.other : storageUsage.other} MB
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <Box p={2}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                drawerContent
                  ? setDataUsage({
                      Music: 0,
                      Profile: 0,
                      video: 0,
                      other: 0,
                    })
                  : setStorageUsage({
                      Music: 0,
                      Profile: 0,
                      video: 0,
                      other: 0,
                    });
              }}
            >
              {language.DataAndStorage.clearCache}
            </Button>
          </Box>
          <Typography p={2} fontSize={"0.9rem"} textAlign={"center"}>
            {language.DataAndStorage.StorageUsageBottomCaption}
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default SettingData;
