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
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
const SettingLanguage = () => {
  const { darkmode } = useSelector((store: RootState) => store.setting);
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
        <Typography fontSize={"1.1rem"}>Language</Typography>
        <IconButton sx={{ ml: "auto", color: "white" }}>
          <CheckIcon />
        </IconButton>
      </Box>
      <FormControl sx={{ p: 2 }}>
        <FormLabel id="demo-radio-buttons-group-label" color="primary">
          Language
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="English"
            control={<Radio />}
            label="English"
          />
          <FormControlLabel
            value="Persian"
            control={<Radio />}
            label="Persian"
          />
          <FormControlLabel
            value="Turkish"
            control={<Radio />}
            label="Turkish"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default SettingLanguage;
