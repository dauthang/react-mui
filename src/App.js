import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginApp from "./components/auth/login";
import RegisterApp from "./components/auth/register";
import Home from "./home/home";
import PrimaryAppBar from "./core/appBar/appBar";

function App() {
  return (
    <div className="App">
      <PrimaryAppBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<LoginApp />} />
          <Route path="/register" element={<RegisterApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
