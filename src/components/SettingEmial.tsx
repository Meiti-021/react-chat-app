import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const SettingEmail = () => {
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
        <Typography fontSize={"1.1rem"}>Edit Name</Typography>
        <IconButton sx={{ ml: "auto", color: "white" }}>
          <CheckIcon />
        </IconButton>
      </Box>
      <Stack direction={"column"} p={2} gap={1}>
        <TextField fullWidth placeholder="Emial" variant="standard" />
      </Stack>
    </div>
  );
};

export default SettingEmail;
