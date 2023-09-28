import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SettingSecurity from "./SettingSecurity";
import SettingPrivacyList from "./SettingPrivacyList";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

const SettingPrivacy = () => {
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
  const navigate = useNavigate();
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
        <IconButton
          sx={{ color: "white" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography fontSize={"1.1rem"}>
          {language.PrivacyAndPolicy.title}
        </Typography>
      </Box>
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          Security
        </Typography>
      </Box>
      <SettingSecurity />
      <Box p={2} sx={{ bgcolor: darkmode ? "#1D2733" : "#008EE4" }}>
        <Typography color={"white"} fontSize={"0.8rem"}>
          {language.PrivacyAndPolicy.firstLine}
        </Typography>
      </Box>
      <Box p={2}>
        <Typography fontSize={"1rem"} color="primary">
          {language.privacy}
        </Typography>
      </Box>
      <SettingPrivacyList />
    </div>
  );
};

export default SettingPrivacy;
