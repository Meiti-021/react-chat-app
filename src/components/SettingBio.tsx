import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";
import { editBio } from "../services/chatSlice";
import { useNavigate } from "react-router-dom";
const SettingBio = () => {
  const dispatch = useDispatch();
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
  const navigate = useNavigate();
  const { users } = useSelector((store: RootState) => store.chat);
  const [value, setValue] = useState<string>(users[0].career);
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
        <Typography fontSize={"1.1rem"}>Bio</Typography>
        <IconButton
          sx={{ ml: "auto", color: "white" }}
          onClick={() => {
            dispatch(editBio({ newBio: value }));
          }}
        >
          <CheckIcon />
        </IconButton>
      </Box>
      <Stack direction={"column"} p={2} gap={1}>
        <TextField
          fullWidth
          placeholder={language.bio}
          variant="standard"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          inputProps={{ maxLength: 60 }}
        />
        <Typography fontSize={"0.9rem"}>
          {language.settingBioDescription}
        </Typography>
      </Stack>
    </div>
  );
};

export default SettingBio;
