import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Home from "./screen/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
