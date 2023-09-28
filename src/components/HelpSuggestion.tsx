import { Box, Button, Typography } from "@mui/material";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: (
      <SentimentVeryDissatisfiedIcon color="error" sx={{ fontSize: "2rem" }} />
    ),
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" sx={{ fontSize: "2rem" }} />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" sx={{ fontSize: "2rem" }} />,
    label: "Neutral",
  },
  4: {
    icon: (
      <SentimentSatisfiedAltIcon color="success" sx={{ fontSize: "2rem" }} />
    ),
    label: "Satisfied",
  },
  5: {
    icon: (
      <SentimentVerySatisfiedIcon color="success" sx={{ fontSize: "2rem" }} />
    ),
    label: "Very Satisfied",
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return (
    <span {...other} style={{ marginRight: "15px" }}>
      {customIcons[value].icon}
    </span>
  );
}

const HelpSuggestion = () => {
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
  return (
    <Box component={"div"} sx={{ height: "100%" }}>
      <Box
        component={"div"}
        sx={{
          height: "30%",
          bgcolor: darkmode ? "black" : "white",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: 600,
            color: "#008EE4",
            textAlign: "center",
          }}
        >
          {language.sendFeedBack}
        </Typography>
        <Box
          sx={{
            width: "100%",
            maxWidth: "500px",
            bgcolor: darkmode ? "#1D2733" : "#008EE4",
            p: 4,
            position: "absolute",
            bottom: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            {language.helpCenter.suggestion.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "#CECECE",
              mt: 1,
            }}
          >
            {language.helpCenter.suggestion.subtitle.split("-")[0]}
            <br />
            {language.helpCenter.suggestion.subtitle.split("-")[1]}
          </Typography>
        </Box>
      </Box>
      <Box
        component={"div"}
        sx={{
          height: "70%",
          bgcolor: darkmode ? "#1D2733" : "#008EE4",
          position: "relative",
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
            bgcolor: darkmode ? "#000" : "#FFF",
            position: "absolute",
            top: 0,
          }}
        >
          <Box sx={{ p: 4 }}>
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: darkmode ? "white" : "black",
                mb: 2,
              }}
            >
              {language.helpCenter.suggestion.experience}
            </Typography>
            <StyledRating
              name="highlight-selected-only"
              defaultValue={4}
              IconContainerComponent={IconContainer}
              getLabelText={(value: number) => customIcons[value].label}
              highlightSelectedOnly
            />
          </Box>
          <textarea
            name=""
            id=""
            cols={30}
            rows={12}
            style={{
              background: darkmode ? "darkgray" : "#EFF3F5",
              border: "none",
              resize: "none",
              width: "100%",
              outline: "none",
              padding: "5px",
            }}
            placeholder={language.helpCenter.suggestion.textarea}
          ></textarea>
          <Box sx={{ px: 4, py: 2 }}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Bug"
                  control={<Radio />}
                  label={language.bug}
                />
                <FormControlLabel
                  value="Suggestion"
                  control={<Radio />}
                  label={language.suggestion}
                />
                <FormControlLabel
                  value="others"
                  control={<Radio />}
                  label={language.others}
                />
              </RadioGroup>
            </FormControl>
            <Button
              fullWidth
              sx={{
                bgcolor: darkmode ? "#1D2733" : "#008EE4",

                color: "white",
                mt: 2,
                "&:hover": { color: "#008EE4" },
                height: "45px",
              }}
            >
              {language.sendFeedBack}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HelpSuggestion;
