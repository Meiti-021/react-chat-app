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
  const { darkmode } = useSelector((store: RootState) => store.setting);
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
              About me
            </Typography>
          </Box>
          <Box px={2}>
            <Typography fontSize={"1rem"}>
              Hey,I'm <strong>Mehdi Dehghani</strong>, a front-end developer and
              the creator of this project. If you find this project intriguing
              and wish to explore potential collaboration, please don't hesitate
              to reach out to me using one of the contact methods listed below.
            </Typography>
          </Box>
        </Box>
        <Box component={"div"} sx={{ p: 0, mt: 2 }}>
          <Box p={2}>
            <Typography fontSize={"1.1rem"} color="primary">
              Contact me
            </Typography>
            <Typography fontSize={"1rem"} mt={2}>
              Ready to discuss your web development project or have any
              questions? Feel free to reach out! I'm eager to learn about your
              vision and how I can help you bring it to life.
            </Typography>
          </Box>
          <Box px={2}>
            <List sx={{ p: 0 }}>
              <ListItem sx={{ p: 0 }}>
                <ListItemIcon>
                  <ShareLocationIcon />
                </ListItemIcon>
                <ListItemText primary="Iran/Tabriz" secondary="location" />
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
                <ListItemText primary="dev.meiti@gmail.com" secondary="Email" />
              </ListItem>
            </List>
            <List sx={{ p: 0 }}>
              <ListItem sx={{ p: 0 }}>
                <ListItemIcon>
                  <CallIcon />
                </ListItemIcon>
                <ListItemText primary="(+98)903-275-4223" secondary="Phone" />
              </ListItem>
            </List>
            <List sx={{ p: 0 }}>
              <ListItem sx={{ p: 0 }}>
                <ListItemIcon>
                  <SupportAgentIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Monday - Friday, 9:00 AM - 6:00 PM (EST)"
                  secondary="Business Hours"
                />
              </ListItem>
            </List>
          </Box>
          <Box component={"div"} sx={{ p: 0, mt: 2 }}>
            <Box p={2}>
              <Typography fontSize={"1.1rem"} color="primary">
                What I Can Offer
              </Typography>
            </Box>
            <Box px={2}>
              <Typography fontSize={"1rem"}>
                Responsive and user-friendly website design and development.
                Custom web solutions tailored to your unique needs. Proficiency
                in HTML, CSS, JavaScript, and various web development
                frameworks. A keen eye for detail and a commitment to delivering
                high-quality work. Quick problem-solving skills to ensure smooth
                project development. Adaptable and comfortable with both remote
                and non-remote work arrangements.
              </Typography>
            </Box>
          </Box>
          <Box component={"div"} sx={{ p: 0, mt: 2 }}>
            <Box p={2}>
              <Typography fontSize={"1.1rem"} color="primary">
                Remote or On-Site, I'm Flexible
              </Typography>
            </Box>
            <Box px={2}>
              <Typography fontSize={"1rem"}>
                Whether you need a web developer who can collaborate with your
                team on-site or someone who can seamlessly integrate into your
                remote workflow, I'm here to make your project a success.
                Distance is never a barrier when it comes to delivering
                top-notch web solutions.
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
