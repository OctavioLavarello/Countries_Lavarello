/// IMPORTS 
import './App.css';
import { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
// PAGES
import Error from "./pages/error/Error.jsx";
import LandingPage from "./pages/landingPage/LandingPage.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage.jsx";
import FormActivity from "./pages/formActivity/FormActivity.jsx";
import DetailPage from "./pages/detailPage/DetailPage.jsx";
// COMPONENTS
import Nav from "./components/nav/Nav.jsx"

function App() {
  const [access, setAccess] = useState(false);
  const location = useLocation();

  return (
    <div>
      <div>
        {
        location.pathname !== "/" && 
        <Nav/>}
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/about" element={<AboutUsPage />}/>
        <Route path="/activities" element={<FormActivity />}/>
        <Route path="/detail/:id" element={<DetailPage />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
};

export default App
