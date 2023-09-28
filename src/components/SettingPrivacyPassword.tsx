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
import { useSelector } from "react-redux";
import { RootState } from "../store";
const SettingPrivacyPassword = ({ darkmode }: { darkmode: boolean }) => {
  const { language } = useSelector((store: RootState) => store.setting);
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
        <ListItemText primary={language.PrivacyAndPolicy.PasscodeLock} />
        <ListItemSecondaryAction>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            {pass ? pass : language.notSet}
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
        PaperProps={{ sx: { bgcolor: darkmode ? "black" : "white" } }}
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
                bgcolor: darkmode ? "#1D2733" : "#008EE4",
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
              <Typography fontSize={"1.1rem"}>
                {language.PrivacyAndPolicy.PasscodeLock}
              </Typography>
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
                color: darkmode ? "#fff" : "#1e2933",
                fontSize: { xs: "1rem", md: " 1.5rem" },
                fontFamily: "Public Sans",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {language.PrivacyAndPolicy.PasscodeLock}
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "0.5rem", md: " 0.9rem" },
                fontFamily: "Public Sans",
                textAlign: "center",
                textTransform: "capitalize",
                color: darkmode ? "lightgrey" : "#7a7f9a",
              }}
            >
              {language.PrivacyAndPolicy.pascodeFirstLine}
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
              {language.PrivacyAndPolicy.EnablePasscode}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SettingPrivacyPassword;
