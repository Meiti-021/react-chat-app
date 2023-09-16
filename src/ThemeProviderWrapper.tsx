import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import darkTheme from "./darkTheme";
import theme from "./theme";
const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const { darkmode } = useSelector((store: RootState) => store.setting);
  return (
    <ThemeProvider theme={darkmode ? darkTheme : theme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
