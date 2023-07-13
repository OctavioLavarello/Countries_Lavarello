import { NavLink } from "react-router-dom"
// COMPONENTES
// UTILS
// STYLES
import style from "./Card.module.css"

export default function Card (props) {
    const { country } = props 
    const { commonName, officialName, continent, image, ID } = country
 
    return (
        <div className={style.div}>
            <NavLink className={style.border} to={`/detail/${ID}` }>
                <img src={image} alt={commonName}/>
                <div className={style.div2}>
                <h2 className={style.h2}>{officialName}</h2> 
                <h2 className={style.h2}>{commonName}</h2>
                <h2 className={style.h2}>{continent}</h2>
                </div>
            </NavLink>
        </div>
    )
 }