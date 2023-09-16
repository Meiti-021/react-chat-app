import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";
import { editBio } from "../services/chatSlice";
const SettingBio = () => {
  const dispatch = useDispatch();
  const { darkmode } = useSelector((store: RootState) => store.setting);
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
        <IconButton sx={{ color: "white" }}>
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
          placeholder="Bio"
          variant="standard"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Typography fontSize={"0.9rem"}>
          You can add a few lines about yourself. Choose who can see your bio in
          setting.
        </Typography>
      </Stack>
    </div>
  );
};

export default SettingBio;
