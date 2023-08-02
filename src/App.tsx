import "./App.css";
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
