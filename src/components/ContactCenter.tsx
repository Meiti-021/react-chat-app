import Grid from "@mui/material/Grid";
import Lottie from "lottie-react";
import ChatAnimation from "../assets/help.json";
import { Box, Typography } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
const ContactCenter = () => {
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
          borderRight: "1px solid #EAEDF3",
          position: "relative",
        }}
      >
        <Box component={"div"} sx={{ p: 2 }}>
          <Typography
            sx={{
              fontSize: "1.3125rem",
              fontWeight: "600",
              my: 2,
              textAlign: "center",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{ fontSize: "1rem", fontWeight: 400, textAlign: "center" }}
          >
            We're here to help! If you have any questions, concerns, or feedback
            about our chat app, please don't hesitate to reach out to us. Our
            dedicated support team is available to assist you.
          </Typography>
          <Grid container gap={0.5} justifyContent={"center"} my={2}>
            <Grid
              item
              xs={5.8}
              sx={{
                bgcolor: "#1e2933",
                height: "150px",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 2,
                  textDecoration: "none",
                }}
              >
                <div style={{ fontSize: "3rem", color: "white" }}>
                  <EmailIcon sx={{ fontSize: "2.5rem" }} />
                </div>
                <Typography sx={{ color: "white", fontSize: "0.9rem" }}>
                  Dev.meiti@gmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={5.8}
              sx={{
                bgcolor: "#1e2933",
                height: "150px",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 2,
                  textDecoration: "none",
                }}
              >
                <div style={{ fontSize: "3rem", color: "white" }}>
                  <CallIcon sx={{ fontSize: "2.5rem" }} />
                </div>
                <Typography sx={{ color: "white", fontSize: "0.9rem" }}>
                  +989032754223
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography sx={{ fontSize: "1.3125rem", fontWeight: "600", my: 2 }}>
            Customer Support
          </Typography>
          <Typography sx={{ fontSize: "1rem", fontWeight: 400 }}>
            <strong>Email</strong>: support@chatapp.com
            <br />
            <strong> Phone</strong>: +1 (123) 456-7890 <br />
            <strong>Business Hours</strong>: Monday - Friday, 9:00 AM - 6:00 PM
            (EST)
          </Typography>
          <Typography sx={{ fontSize: "1.3125rem", fontWeight: "600", my: 2 }}>
            Feedback and Suggestions
          </Typography>
          <Typography sx={{ fontSize: "1rem", fontWeight: 400 }}>
            We value your input and are always looking for ways to improve our
            app. If you have any suggestions or ideas, please feel free to share
            them with us at{" "}
            <a href="/" style={{ color: "blue" }}>
              feedback@chatapp.com
            </a>
            .
          </Typography>
          <Typography sx={{ fontSize: "1.3125rem", fontWeight: "600", my: 2 }}>
            Technical Support
          </Typography>
          <Typography sx={{ fontSize: "1rem", fontWeight: 400 }}>
            Encountering technical issues? Our technical support team is here to
            help you get back on track. Reach out to us at
            <a href="/" style={{ color: "blue" }}>
              {" "}
              techsupport@chatapp.com
            </a>
            , and we'll work to resolve any problems you're facing.
          </Typography>
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
