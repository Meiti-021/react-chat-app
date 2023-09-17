import Grid from "@mui/material/Grid";
import { Box, Drawer, Typography, Button } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { helpDatacenter } from "../utils/helps";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const HelpCenter = () => {
  const { pathname } = useLocation();
  const [value, setValue] = useState<string>("");
  const { darkmode } = useSelector((store: RootState) => store.setting);

  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        "&::-webkit-scrollbar": { display: "none" },
        pb: 5,
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
        }}
      >
        <Box p={2}>
          <Typography
            sx={{ fontSize: "2rem", fontWeight: 600, textAlign: "center" }}
          >
            Help Center
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "center",
              color: "#7a7f9a",
            }}
          >
            Find answers to frequently asked questions.
          </Typography>
          <Box
            component={"div"}
            sx={{ bgcolor: "#1e2933", p: 1, borderRadius: 2, my: 2 }}
          >
            <input
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                height: "45px",
                borderRadius: "4px",
                padding: "5px",
                color: "white",
                backgroundColor: "inherit",
              }}
              placeholder="search ..."
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ height: "45px", bgcolor: "#008EE4" }}
            >
              SEARCH
            </Button>
          </Box>
        </Box>
        <Grid container gap={0.5} justifyContent={"center"} px={2}>
          {helpDatacenter.map((item) => {
            return (
              <Grid
                item
                key={item.id}
                xs={5.8}
                sx={{
                  bgcolor: "#1e2933",
                  height: "150px",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                <Box
                  component={Link}
                  to={`/help/${item.id}`}
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
                    {item.icon}
                  </div>
                  <Typography sx={{ color: "white", fontSize: "0.9rem" }}>
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: 600,
            textAlign: "center",
            mt: 3,
          }}
        >
          About
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            textAlign: "center",
            mt: 1,
            p: 1,
            color: "#7a7f9a",
          }}
        >
          Introducing MEITIGRAM – a demo that highlights the magic of front-end
          development using React and Material UI. Dive into a smooth messaging
          experience, where things look great and work seamlessly thanks to the
          skills of our developer (Mahdi Dehgani).
        </Typography>
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
        <Outlet />
      </Grid>
      <Drawer
        open={pathname !== "/help" ? true : false}
        sx={{
          display: { xs: "block", sm: "none" },
          width: "100vw",
          "&::-webkit-scrollbar": { display: "none" },
        }}
        PaperProps={{
          sx: { width: "100vw", "&::-webkit-scrollbar": { display: "none" } },
        }}
      >
        <Outlet />
      </Drawer>
    </Grid>
  );
};

export default HelpCenter;
