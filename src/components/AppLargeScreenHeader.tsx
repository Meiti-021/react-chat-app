import * as React from "react";
import TextField from "@mui/material/TextField";
import { CircleFlag } from "react-circle-flags";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
type LanguageDataType = {
  code: string;
  label: string;
};

const languages: LanguageDataType[] = [
  { code: "GB", label: "English" },
  {
    code: "IR",
    label: "Persian",
  },
  { code: "TR", label: "Turkey" },
];

const ComboBox = () => {
  const [value, setValue] = React.useState<string>(languages[0].label);
  return (
    <FormControl sx={{ width: 180 }}>
      <InputLabel id="demo-simple-select-label">Language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Language"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        size="small"
      >
        {languages.map((item) => {
          return (
            <MenuItem value={item.label} key={item.code}>
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
  );
};

export default AppLargeScreenHeader;
