import { NavLink } from "react-router-dom";
import img from "../../assets/icons/error.png";
import style from"./Error.module.css";

export default function Error (){
    return(
        <div className={style.bigDiv}>
            <NavLink to="/">
                <div className={style.div}>
                    <img src={img} alt="ERROR_404" />
                    <h2 className={style.h2}>ERROR 404 - PAGE NOT FOUND</h2>
                </div>
            </NavLink>
        </div>
    )
}