import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Home from "./screen/Home";
import Product from "./components/ProductDetail";
import Cart from "./components/Cart";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
    
          <Route path="/product/:id" element={<Product />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
