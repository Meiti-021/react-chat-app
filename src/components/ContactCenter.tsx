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
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const ContactCenter = () => {
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
              Contact Info
            </Typography>
          </Box>
          <Box px={2}>
            <Typography fontSize={"1rem"}>
              We're here to help! If you have any questions, concerns, or
              feedback about our chat app, please don't hesitate to reach out to
              us. Our dedicated support team is available to assist you.
            </Typography>
          </Box>
        </Box>
        <Box component={"div"} sx={{ p: 0, mt: 2 }}>
          <Box p={2}>
            <Typography fontSize={"1.1rem"} color="primary">
              Customer Support
            </Typography>
          </Box>
          <Box px={2}>
            <List sx={{ p: 0 }}>
              <ListItem sx={{ p: 0 }}>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText
                  primary="support@meitigram.com"
                  secondary="Email"
                />
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
                Feedback and Suggestions
              </Typography>
            </Box>
            <Box px={2}>
              <Typography fontSize={"1rem"}>
                We value your input and are always looking for ways to improve
                our app. If you have any suggestions or ideas, please feel free
                to share them with us at{" "}
                <a href="/" style={{ color: "blue" }}>
                  feedback@chatapp.com
                </a>
                .
              </Typography>
            </Box>
          </Box>
          <Box component={"div"} sx={{ p: 0, mt: 2 }}>
            <Box p={2}>
              <Typography fontSize={"1.1rem"} color="primary">
                Technical Support
              </Typography>
            </Box>
            <Box px={2}>
              <Typography fontSize={"1rem"}>
                Encountering technical issues? Our technical support team is
                here to help you get back on track. Reach out to us at
                <a href="/" style={{ color: "blue" }}>
                  {" "}
                  techsupport@chatapp.com
                </a>
                , and we'll work to resolve any problems you're facing.
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

export default ContactCenter;
