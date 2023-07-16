/// IMPORTS
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux";
// COMPONENTS
import SearchBar from "../searchBar/SearchBar.jsx";
// ACTIONS
import { logout } from "../../redux/actions/actions.js";
// STYLES
import style from "./Nav.module.css";
import linkedin from "../../assets/icons/lin.png"
import github from "../../assets/icons/github.png"
import henry from "../../assets/icons/henry.png"

// NAV
export default function Nav () {
    const dispatch = useDispatch()
    // HANLDER
    const handlerLogout = () => {
        dispatch(logout())
    }

    return (
        <div className={style.div}>
            <div>
                <button className={style.floatButton}>
                    <NavLink className={style.nav} to="/home">Home</NavLink>
                </button>
                <button className={style.floatButton}>
                    <NavLink className={style.nav} to="/activities">Create Activities</NavLink>
                </button>
            </div >
            <div className={style.search}>
                <SearchBar/>
            </div>
            <div className={style.container}>
                <h4>About us:</h4>
                <NavLink 
                to="https://www.linkedin.com/in/octavio-lavarello-175342271/"
                target="_blank">
                    <img className={style.img} src={linkedin} alt="linkedin" />
                </NavLink>
                <NavLink 
                to="https://github.com/OctavioLavarello"
                target="_blank">
                    <img className={style.img} src={github} alt="github" />
                </NavLink>
                <NavLink 
                to="https://www.soyhenry.com/"
                target="_blank">
                    <div className={style.henry}>
                        <img className={style.img} src={henry} alt="henry"/>
                    </div>
                </NavLink>
                <button 
                className={style.floatButton}
                onClick={handlerLogout}
                >Log out</button>
            </div>
        </div>
   );
}
