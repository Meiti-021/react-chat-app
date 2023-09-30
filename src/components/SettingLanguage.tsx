import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import { switchLanguage } from "../services/settingSlice";
const SettingLanguage = () => {
  const { darkmode, language, langugaeType } = useSelector(
    (store: RootState) => store.setting
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
        <Typography fontSize={"1.1rem"}>{language.language}</Typography>
        <IconButton sx={{ ml: "auto", color: "white" }}>
          <CheckIcon />
        </IconButton>
      </Box>
      <FormControl sx={{ p: 2 }}>
        <FormLabel id="demo-radio-buttons-group-label" color="primary">
          {language.language}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            checked={langugaeType === "en"}
            value="en"
            control={<Radio />}
            label="English"
            onChange={() => dispatch(switchLanguage("en"))}
          />
          <FormControlLabel
            checked={langugaeType === "tr"}
            value="tr"
            control={<Radio />}
            label="Turkish"
            onChange={() => dispatch(switchLanguage("tr"))}
          />
          <FormControlLabel
            value="fa"
            control={<Radio />}
            label="Persian(soon)"
            disabled
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default SettingLanguage;
