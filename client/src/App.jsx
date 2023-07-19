/// IMPORTS 
import './App.css';
import { useEffect,  } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
// PAGES
import Error from "./pages/error/Error.jsx";
import LandingPage from "./pages/landingPage/LandingPage.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import FormActivity from "./pages/formActivity/FormActivity.jsx";
import DetailPage from "./pages/detailPage/DetailPage.jsx";
// COMPONENTS
import Nav from "./components/nav/Nav.jsx"

// APP
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { access } = useSelector(state => state)
  // LOGIN UTIL FOR ROUTES
  const AllowedRoutes = ['/', '/home', '/activities', '/detail:id'];
  // LOGIN
  useEffect(() => {
    const isAllowedRoute = AllowedRoutes.includes(location.pathname);
    if (!access && isAllowedRoute && location.pathname !== '/') {
      navigate('/');
    }
  }, [access, location, navigate, AllowedRoutes]);

  function loginNavigate () {
    navigate("/home")
  }
  //RETURN
  return (
    <div>
      <div>
        {
        location.pathname !== "/" && 
        <Nav/>}
      </div>
      <Routes>
        <Route path="/" element={<LandingPage loginNavigate={loginNavigate}/>}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/activities" element={<FormActivity />}/>
        <Route path="/detail/:id" element={<DetailPage />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
};

export default App
