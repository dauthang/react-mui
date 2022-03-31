import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginApp from "./components/auth/login";
import RegisterApp from "./components/auth/register";
import Home from "./home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginApp />} />
          <Route exact path="/register" element={<RegisterApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
