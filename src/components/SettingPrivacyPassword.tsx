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
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Lottie from "lottie-react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ChatAnimation from "../assets/lock.json";
const SettingPrivacyPassword = () => {
  const [pass, setPass] = useState<string>("");
  const [form, setForm] = useState<string>("");
  const [Open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!Open);
  };
  return (
    <>
      <ListItem>
        <ListItemIcon>
          <LockOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={"Passcode Lock"} />
        <ListItemSecondaryAction>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            {pass ? pass : "NOT SET"}
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
              <Typography fontSize={"1.1rem"}>Passcode Lock</Typography>
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
              Passcode Lock
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
              when a passcode is set, a lock icon appears above your chatlist,
              tap it to lock your meitigram app.
            </Typography>
            <TextField
              sx={{ height: "40px", mt: 2 }}
              inputProps={{ style: { height: "40px" } }}
              InputProps={{ style: { height: "40px" } }}
              fullWidth
              value={form}
              onChange={(e) => {
                setForm(e.target.value);
              }}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                setPass(form);
              }}
            >
              Enable Passcode
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SettingPrivacyPassword;