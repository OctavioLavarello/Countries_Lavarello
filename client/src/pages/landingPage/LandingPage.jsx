import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// COMPONENTES
import Login from "../../components/login/Login.jsx";
import Register from "../../components/register/Register.jsx";
// ACTIONS 
import { getAllUsers } from "../../redux/actions/actions.js";
// STYLES
import style from "./LandingPage.module.css";

export default function LandingPage(props) {
    const { loginNavigate } = props
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllUsers())
    }, []);

    return (
        <div>
            <div className={style.div}>
                <h2>Countries Search PI</h2>
                <Login loginNavigate={loginNavigate}/>
            </div>
            <div className={style.bigDiv}>
                <div className={style.div2}>
                    <NavLink to="/home">
                        <button>Home</button>
                    </NavLink>
                </div>
                <div className={style.div2}>
                    <Register />
                </div>
            </div>
        </div> 
    )
}