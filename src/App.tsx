import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppContainer from "./components/AppContainer";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import LoginCenter from "./components/LoginCenter";
import { SnackbarProvider } from "notistack";

function App() {
  const { isLogin } = useSelector((store: RootState) => store.setting);
  if (isLogin) {
    return (
      <>
        <SnackbarProvider />
        <Router>
          <AppContainer />
        </Router>
      </>
    );
  }
  return (
    <>
      <SnackbarProvider />
      <LoginCenter />
    </>
  );
}

export default App;
