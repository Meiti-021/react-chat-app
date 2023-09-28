import * as React from "react";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const HelpBuqReport = () => {
  const [option, setOption] = React.useState("");
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
  };

  return (
    <Box
      component={"div"}
      sx={{
        height: "100%",
        bgcolor: darkmode ? "#1D2733" : "#008EE4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "500px",
          bgcolor: darkmode ? "black" : "#fff",
          p: 5,
        }}
      >
        <Typography
          sx={{ textAlign: "center", fontWeight: 500, fontSize: "1.2rem" }}
        >
          {language.helpCenter.bugReport.title}
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={4}
          gap={2}
        >
          <Typography
            sx={{ fontWeight: 400, fontSize: "1.1rem", whiteSpace: "nowrap" }}
          >
            {language.helpCenter.bugReport.optionText}
          </Typography>
          <Box sx={{ width: "100%" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {language.select}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={option}
                label={language.helpCenter.bugReport.optionText}
                onChange={handleChange}
              >
                <MenuItem value={10}>
                  {language.helpCenter.bugReport.options.reportABug}
                </MenuItem>
                <MenuItem value={20}>
                  {language.helpCenter.bugReport.options.requestAFeature}
                </MenuItem>
                <MenuItem value={30}>
                  {language.helpCenter.bugReport.options.others}
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
        <Stack mt={3} gap={1}>
          <Typography sx={{ fontSize: "1.1rem", fontWeight: 500 }}>
            {language.title}
          </Typography>
          <TextField
            id="outlined-basic"
            label={language.enterATitle}
            variant="outlined"
          />
        </Stack>
        <Stack mt={3} gap={1}>
          <Typography sx={{ fontSize: "1.1rem", fontWeight: 500 }}>
            {language.description}
          </Typography>
          <TextField
            id="outlined-basic"
            label={language.enterAdescription}
            variant="outlined"
          />
        </Stack>
        <Button
          fullWidth
          sx={{
            mt: 7,
            bgcolor: darkmode ? "#1D2733" : "#008EE4",
            color: "white",
            "&:hover": { color: "#008EE4" },
            height: "50px",
          }}
        >
          {language.submit}
        </Button>
      </Box>
    </Box>
  );
};

export default HelpBuqReport;
