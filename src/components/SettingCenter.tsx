import Grid from "@mui/material/Grid";
import { Drawer } from "@mui/material";

import { Outlet, useLocation } from "react-router-dom";
import SettingMainMenu from "./SettingMainMenu";
// import { useState } from "react";

const SettingCenter = () => {
  const { pathname } = useLocation();
  // const [value, setValue] = useState<string>("");
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
      <SettingMainMenu />
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

export default SettingCenter;