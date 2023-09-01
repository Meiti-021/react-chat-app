import {
  Box,
  Button,
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Lottie from "lottie-react";
import ChatAnimation from "../assets/email.json";
const SettingPrivacyBackup = () => {
  const [backup, setBackup] = useState<string>("");
  const [form, setForm] = useState<string>("");
  const [Open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!Open);
  };
  return (
    <>
      <ListItem>
        <ListItemIcon>
          <AlternateEmailOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={"Backup Email"} />
        <ListItemSecondaryAction>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            {backup
              ? `${backup.slice(0, 3)}****${backup.slice(-4, -1)}`
              : "NOT SET"}
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
      <Drawer
        variant="temporary"
        open={Open}
        anchor="right"
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on .
        }}
      >
        <Box sx={{ width: { xs: "100vw", sm: "400px" }, height: "100vh" }}>
          <Box sx={{ width: "100%" }}>
            <Box
              component={"div"}
              sx={{
                height: "3.5rem",
                display: "flex",
                gap: 5,
                alignItems: "center",
                bgcolor: "#008EE4",
                color: "white",
                px: 2,
                width: "100%",
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
              <Typography fontSize={"1.1rem"}>Backup Emial</Typography>
            </Box>
          </Box>
          <Box
            component={"div"}
            sx={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              p: 2,
            }}
          >
            <Box
              component={"div"}
              sx={{
                width: { xs: 50, md: 150 },
                height: { xs: 30, md: 150 },
                mt: -10,
              }}
            >
              <Lottie animationData={ChatAnimation} loop={true} />
            </Box>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#1e2933",
                fontSize: { xs: "1rem", md: " 1.5rem" },
                fontFamily: "Public Sans",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Backup Email
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "0.5rem", md: " 0.9rem" },
                fontFamily: "Public Sans",
                textAlign: "center",
                textTransform: "capitalize",
                color: "#7a7f9a",
              }}
            >
              Your safty net for account recovery and security notifications.
            </Typography>
            <TextField
              sx={{ height: "40px", mt: 2 }}
              inputProps={{ style: { height: "40px" } }}
              InputProps={{ style: { height: "40px" }, type: "emial" }}
              fullWidth
              value={form}
              onChange={(e) => {
                setForm(e.target.value);
              }}
              type="email"
            />
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                setBackup(form);
              }}
            >
              {form ? "Change Backup" : "Set Backup"}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SettingPrivacyBackup;
