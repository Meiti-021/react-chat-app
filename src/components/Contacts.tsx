import Grid from "@mui/material/Grid";
import ContactList from "./ContactList";
import Lottie from "lottie-react";
import ChatAnimation from "../assets/contacts1.json";
import { Box, TextField, Typography, Avatar } from "@mui/material";
import { useState } from "react";
import { users } from "../utils/users";
import { Link } from "react-router-dom";
const Contacts = () => {
  const [value, setValue] = useState<string>("");
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
          <Typography sx={{ fontSize: "1.3125rem", fontWeight: "600" }}>
            Contacts
          </Typography>
          <TextField
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            sx={{
              width: "100%",
              my: 2,
            }}
            inputProps={{
              style: {
                height: "14px",
              },
            }}
            InputLabelProps={{
              style: {
                marginTop: "-5px",
              },
            }}
            label="search contact"
          />
        </Box>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {[...users]
            .sort(() => (Math.random() > 0.5 ? 1 : -1))
            .slice(0, 4)
            .map((item) => {
              if (item.user_id !== "user1") {
                return (
                  <Box
                    component={Link}
                    sx={{
                      width: "70px",
                      height: "50px",
                      background: "#D3FFD9",
                      position: "relative",
                      borderRadius: "5px",
                      mb: 5,
                      display: "block",
                    }}
                    to={`/${item.user_id}`}
                  >
                    <Avatar
                      src={`${item.profile_picture}`}
                      sx={{
                        position: "absolute",
                        top: "-15px",
                        left: "0",
                        right: "0",
                        m: "0 auto",
                        background:
                          "linear-gradient(90deg, rgba(97,255,251,1) 6%, rgba(12,103,121,1) 100%)",
                      }}
                      //   variant="rounded"
                    />
                    <Typography
                      sx={{
                        color: "#2CC641",
                        fontSize: "11px",
                        position: "absolute",
                        bottom: "5px",
                        left: "0",
                        right: "0",
                        m: "0 auto",
                        textAlign: "center",
                      }}
                    >
                      {item.username}
                    </Typography>
                  </Box>
                );
              }
            })}
        </Box>
        <ContactList />
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

export default Contacts;
