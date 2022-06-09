import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import apiFacade from "./apiFacade.js";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import LoginPage from "./components/LoginPage";
import Cat from "./components/Cat";
import { useState } from "react";
import Header from "./components/Header";
import Owners from "./components/Owners";
import Admin from "./components/Admin";
import Boats from "./components/Boats";

export default function App() {


  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <BrowserRouter>
      <Header loggedIn={loggedIn}/>
    <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="login" element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path="owner" element={<Owners/>} />
        <Route path="boats" element={<Boats/>} />
        <Route path="admin" element={<Admin/>} />
        <Route path="*" element={<NoMatch/>} />
    </Routes>
  </BrowserRouter>,
    </div>
    
  );
}
