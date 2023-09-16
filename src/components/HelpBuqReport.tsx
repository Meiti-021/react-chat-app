import * as React from "react";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const HelpBuqReport = () => {
  const [age, setAge] = React.useState("");
  const { darkmode } = useSelector((store: RootState) => store.setting);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
          Report a bug or request a feature
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
            I would like to report
          </Typography>
          <Box sx={{ width: "100%" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select an option
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Select an Option"
                onChange={handleChange}
              >
                <MenuItem value={10}>Report A Bug</MenuItem>
                <MenuItem value={20}>Request A Feature</MenuItem>
                <MenuItem value={30}>Others</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
        <Stack mt={3} gap={1}>
          <Typography sx={{ fontSize: "1.1rem", fontWeight: 500 }}>
            Title
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter a title"
            variant="outlined"
          />
        </Stack>
        <Stack mt={3} gap={1}>
          <Typography sx={{ fontSize: "1.1rem", fontWeight: 500 }}>
            Description
          </Typography>
          <TextField
            id="outlined-basic"
            label="Entre a description"
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
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default HelpBuqReport;
