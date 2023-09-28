import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

const HelpGeneral = () => {
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          height: "3.5rem",
          display: "flex",
          gap: 2,
          alignItems: "center",
          bgcolor: darkmode ? "#1D2733" : "#008EE4",
          color: "white",
          px: 2,
          py: 1,
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
        <Typography fontSize={"1.1rem"}>General</Typography>
      </Box>
      <Box component={"div"} sx={{ p: 2 }}>
        <Typography
          fontSize={"1rem"}
          color="primary"
          mb={2}
          fontWeight={"bold"}
        >
          {language.faqs}
        </Typography>
        <Typography
          sx={{ color: darkmode ? "white" : "#7a7f9a" }}
          fontSize={"0.9rem"}
        >
          {language.helpCenter.general.faqsDescription}
        </Typography>
        <Box component={"div"} sx={{ mt: 2 }}>
          {language.helpCenter.general.faqs.map((faq, index) => {
            return (
              <Accordion key={"faq" + index} elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ px: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      color: darkmode ? "white" : "black",
                      fontWeight: 500,
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 1 }}>
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#7a7f9a",
                      fontWeight: 400,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default HelpGeneral;
