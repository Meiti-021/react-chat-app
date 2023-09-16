import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SettingSecurity from "./SettingSecurity";
import SettingPrivacyList from "./SettingPrivacyList";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const SettingPrivacy = () => {
  const { darkmode } = useSelector((store: RootState) => store.setting);
  return (
    <div>
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
        <IconButton sx={{ color: "white" }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography fontSize={"1.1rem"}>Privacy and Security</Typography>
      </Box>
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          Security
        </Typography>
      </Box>
      <SettingSecurity />
      <Box p={2} sx={{ bgcolor: darkmode ? "#1D2733" : "#008EE4" }}>
        <Typography color={"white"} fontSize={"0.8rem"}>
          Review the list of devices where you are logged into your meitigram
          app.
        </Typography>
      </Box>
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          Privacy
        </Typography>
      </Box>
      <SettingPrivacyList />
    </div>
  );
};

export default SettingPrivacy;
