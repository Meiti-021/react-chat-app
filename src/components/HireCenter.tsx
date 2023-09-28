import Grid from "@mui/material/Grid";
import Lottie from "lottie-react";
import ChatAnimation from "../assets/help.json";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const HireCenter = () => {
  const { darkmode, language } = useSelector(
    (store: RootState) => store.setting
  );
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        height={"100%"}
        sx={{
          overflow: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          borderRight: darkmode ? "1px solid #7A848F" : "1px solid #EAEDF3",
          position: "relative",
          pb: 5,
        }}
      >
        <Box component={"div"} sx={{ p: 0 }}>
          <Box p={2}>
            <Typography fontSize={"1.1rem"} color="primary">
              {language.aboutMe}
            </Typography>
          </Box>
          <Box px={2}>
            <Typography fontSize={"1rem"}>
              {language.hireMeCenter.aboutMeSubtitle.split("-")[0]}{" "}
              <strong>
                {language.hireMeCenter.aboutMeSubtitle.split("-")[1]}
              </strong>
              {language.hireMeCenter.aboutMeSubtitle.split("-")[3]}
            </Typography>
          </Box>
        </Box>
        <Box component={"div"} sx={{ p: 0, mt: 2 }}>
          <Box p={2}>
            <Typography fontSize={"1.1rem"} color="primary">
              {language.hireMeCenter.contactMeTitle}
            </Typography>
            <Typography fontSize={"1rem"} mt={2}>
              {language.hireMeCenter.contactMesubtitle}
            </Typography>
          </Box>
          <Box px={2}>
            <List sx={{ p: 0 }}>
              <ListItem sx={{ p: 0 }}>
                <ListItemIcon>
                  <ShareLocationIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Iran/Tabriz"
                  secondary={language.location}
                />
              </ListItem>
            </List>
            <List sx={{ p: 0 }}>
              <ListItem sx={{ p: 0 }}>
                <ListItemIcon>
                  <TelegramIcon />
                </ListItemIcon>
                <ListItemText primary="t.me/meitidev" secondary="Telegram" />
              </ListItem>
            </List>
            <List sx={{ p: 0 }}>
              <ListItem sx={{ p: 0 }}>
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText
                  primary="github.com/Meiti-021"
                  secondary="Github"
                />
              </ListItem>
            </List>
            <List sx={{ p: 0 }}>
              <ListItem sx={{ p: 0 }}>
                <ListItemIcon>
                  <LinkedInIcon />
                </ListItemIcon>
                <ListItemText
                  primary="linkedin.com/in/mahdi-dehgani"
                  secondary="Linkedin"
                />
              </ListItem>
            </List>
            <List sx={{ p: 0 }}>
              <ListItem sx={{ p: 0 }}>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText
                  primary="dev.meiti@gmail.com"
                  secondary={language.email}
                />
              </ListItem>
            </List>
            <List sx={{ p: 0 }}>
              <ListItem sx={{ p: 0 }}>
                <ListItemIcon>
                  <CallIcon />
                </ListItemIcon>
                <ListItemText
                  primary="(+98)903-275-4223"
                  secondary={language.phoneNumber}
                />
              </ListItem>
            </List>
            <List sx={{ p: 0 }}>
              <ListItem sx={{ p: 0 }}>
                <ListItemIcon>
                  <SupportAgentIcon />
                </ListItemIcon>
                <ListItemText
                  primary={language.hireMeCenter.bussinessHours.primary}
                  secondary={language.hireMeCenter.bussinessHours.secondary}
                />
              </ListItem>
            </List>
          </Box>
          <Box component={"div"} sx={{ p: 0, mt: 2 }}>
            <Box p={2}>
              <Typography fontSize={"1.1rem"} color="primary">
                {language.hireMeCenter.whatCanIOfferTitle}
              </Typography>
            </Box>
            <Box px={2}>
              <Typography fontSize={"1rem"}>
                {language.hireMeCenter.whatCanIOfferSubtitle}
              </Typography>
            </Box>
          </Box>
          <Box component={"div"} sx={{ p: 0, mt: 2 }}>
            <Box p={2}>
              <Typography fontSize={"1.1rem"} color="primary">
                {language.hireMeCenter.RemoteOrOnSiteTitle}
              </Typography>
            </Box>
            <Box px={2}>
              <Typography fontSize={"1rem"}>
                {language.hireMeCenter.RemoteOrOnSiteSubtitle}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={0}
        sm={6}
        md={8}
        lg={9}
        height={"100%"}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Box
          component={"div"}
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            p: 1,
          }}
        >
          <Box
            component={"div"}
            sx={{
              width: { xs: 400, md: 600 },
              height: { xs: 300, md: 500 },
              mt: -10,
            }}
          >
            <Lottie animationData={ChatAnimation} loop={true} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HireCenter;
