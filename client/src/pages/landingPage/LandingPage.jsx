import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// COMPONENTES
import Login from "../../components/login/Login.jsx";
import Register from "../../components/register/Register.jsx";
// ACTIONS 
import { getAllUsers, accessTrue } from "../../redux/actions/actions.js";
// STYLES
import style from "./LandingPage.module.css";

export default function LandingPage(props) {
    const { loginNavigate } = props
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllUsers())
    }, []);

    const handlerLetsGo = () => {
        dispatch(accessTrue())
        loginNavigate()
    }

    return (
        <div>
            <div className={style.div}>
                <div className={style.countries}>
                    <h2>Countries Search PI</h2>
                </div>
                <div className={style.login}>
                    <Login loginNavigate={loginNavigate}/>
                </div>
            </div>
            <div className={style.bigDiv}>
                <div className={style.divTextStart}>
                    <button 
                    onClick={handlerLetsGo} 
                    className={style.letsGo}
                    >Lets Go...</button>
                </div>
                <div className={style.divRegister}>
                    <Register />
                </div>
            </div>
        </div> 
    )
}