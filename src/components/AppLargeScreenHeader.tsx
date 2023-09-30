import TextField from "@mui/material/TextField";
import { CircleFlag } from "react-circle-flags";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { switchLanguage } from "../services/settingSlice";
type LanguageDataType = {
  code: string;
  label: string;
  language: "fa" | "en" | "tr";
};

const languages: LanguageDataType[] = [
  { code: "GB", label: "English", language: "en" },
  {
    code: "IR",
    label: "Persian",
    language: "fa",
  },
  { code: "TR", label: "Turkey", language: "tr" },
];

const ComboBox = () => {
  const { langugaeType } = useSelector((store: RootState) => store.setting);
  const dispatch = useDispatch();
  return (
    <FormControl sx={{ width: 180 }}>
      <InputLabel id="demo-simple-select-label">Language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={langugaeType}
        label="Language"
        onChange={(event) => {
          dispatch(switchLanguage(event.target.value));
        }}
        size="small"
      >
        {languages.map((item) => {
          return (
            <MenuItem value={item.language} key={item.code}>
              <Box
                component="li"
                sx={{
                  "& > img": { mr: 2, flexShrink: 0 },
                  listStyleType: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CircleFlag
                  countryCode={item.code.toLowerCase()}
                  width="20"
                  height="20"
                />
                {item.label}
              </Box>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

const AppLargeScreenHeader = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          gap: 2,
          display: { xs: "none", xl: "flex" },
        }}
      >
        <TextField
          id="outlined-basic"
          label="Type to Search..."
          variant="outlined"
          size="small"
          sx={{ width: "100%" }}
        />
        <ComboBox />
      </Box>
    </>
  );
};

export default AppLargeScreenHeader;
