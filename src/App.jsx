import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Hero from "./pages/Hero/Hero";

const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element={<Hero />} />
      <Route path="/dashboard" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
    </Routes>
  </Router>
);

function App() {
  return (
    <>
      {routes}
    </>
  );
}

export default App;
