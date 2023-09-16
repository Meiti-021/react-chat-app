import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";
import { editLocation } from "../services/chatSlice";
const SettingLocation = () => {
  const { darkmode } = useSelector((store: RootState) => store.setting);
  const dispatch = useDispatch();
  const { users } = useSelector((store: RootState) => store.chat);
  const [value, setValue] = useState<string>(users[0].location);
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
        <Typography fontSize={"1.1rem"}>Location</Typography>
        <IconButton
          sx={{ ml: "auto", color: "white" }}
          onClick={() => {
            dispatch(editLocation({ newLocation: value }));
          }}
        >
          <CheckIcon />
        </IconButton>
      </Box>
      <Stack direction={"column"} p={2} gap={1}>
        <TextField
          fullWidth
          placeholder="Location"
          variant="standard"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Typography fontSize={"0.9rem"}>
          You can add a few lines about where you're living right now.
        </Typography>
      </Stack>
    </div>
  );
};

export default SettingLocation;
