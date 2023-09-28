import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";
import { editName } from "../services/chatSlice";
import { useNavigate } from "react-router-dom";
const SettingEditName = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
  const { users } = useSelector((store: RootState) => store.chat);
  const [nameValue, setNameValue] = useState<string>(users[0].username);
  const [lastNameValue, setLastNameValue] = useState<string>(
    users[0].userLastName
  );
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
        <Typography fontSize={"1.1rem"}>{language.editName}</Typography>
        <IconButton
          sx={{ ml: "auto", color: "white" }}
          onClick={() => {
            dispatch(
              editName({ newName: nameValue, newLastName: lastNameValue })
            );
          }}
        >
          <CheckIcon />
        </IconButton>
      </Box>
      <Stack direction={"column"} p={2} gap={1}>
        <TextField
          fullWidth
          placeholder={language.name}
          variant="standard"
          value={nameValue}
          onChange={(e) => {
            setNameValue(e.target.value);
          }}
          inputProps={{ maxLength: 25 }}
        />
        <TextField
          fullWidth
          placeholder={language.lastName}
          variant="standard"
          value={lastNameValue}
          onChange={(e) => {
            setLastNameValue(e.target.value);
          }}
          inputProps={{ maxLength: 25 }}
        />
      </Stack>
    </div>
  );
};

export default SettingEditName;
