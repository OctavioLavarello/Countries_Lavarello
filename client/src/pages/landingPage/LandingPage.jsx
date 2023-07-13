import { NavLink } from "react-router-dom"
// COMPONENTES
import Login from "../../components/login/Login.jsx";
import Register from "../../components/register/Register.jsx";
// UTILS
import login from "../../utils/login";
// STYLES
import style from "./LandingPage.module.css";

export default function LandingPage(props) {
    return (
        <div >
            <h2>Landing</h2>
            <button>
                <NavLink to="/home">Home</NavLink>
            </button>
            <Login login ={login}/>
            <Register />
        </div> 
    )
}