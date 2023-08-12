import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/public-sans/300.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/700.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppContainer from "./components/AppContainer";
function App() {
  return (
    <>
      <Router>
        <AppContainer />
      </Router>
    </>
  );
}

export default App;
