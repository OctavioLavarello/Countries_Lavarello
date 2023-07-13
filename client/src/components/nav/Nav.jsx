/// IMPORTS
import { NavLink } from "react-router-dom"
import { useState } from "react";
// COMPONENTS
import SearchBar from "../searchBar/SearchBar.jsx";
// STYLES
import style from "./Nav.module.css";

export default function Nav () {
    return (
        <div className={style.div}>
            <div className={style.div}>
                <button className={style.floatButton}>
                    <NavLink className={style.nav} to="/home">Home</NavLink>
                </button>
                <button className={style.floatButton}>
                    <NavLink className={style.nav} to="/activities">Activities</NavLink>
                </button>
            </div >
            <div>
                <SearchBar/>
            </div>
            <div>
                <button  className={style.floatButton}>
                    <NavLink className={style.nav} to="/about">About Us</NavLink>
                </button>
                <button className={style.floatButton}>Log out</button>
            </div>
        </div>
   );
}
