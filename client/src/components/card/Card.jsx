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
                <div className={style.div2}>
                    <img className={style.img} src={image} alt={commonName}/>
                </div>
                <div className={style.div2}>
                    <h3 className={style.h3}>{officialName}</h3> 
                    <h3 className={style.h3}>{commonName}</h3>
                    <h3 className={style.h3}>{continent}</h3>
                </div>
            </NavLink>
        </div>
    )
 }