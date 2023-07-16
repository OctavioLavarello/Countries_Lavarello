/// IMPORTS
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// ACTIONS
import { getCountryByID } from "../../redux/actions/actions"
// STYLE
import style from "./DetailPage.module.css"

// DETAIL PAGE
export default function DetailPage () {
    // GLABAL STATE
    const { countryByID } = useSelector(state => state)
    // ID PARAMS
    const { id } = useParams();
    const dispatch = useDispatch();
    // COUNTRY BY ID
    useEffect(() => {
        dispatch(getCountryByID(id))
    }, [id]);
    console.log(countryByID)
    const { Activities, commonName, officialName, image, continent, capital, subregion, population, area } = countryByID

    // RETURN
    return (
        <div className={style.div}>
            <div>
                <h2>Country Information</h2>
                <h3 className={style.h2}>Continent | {continent}</h3>
                <h3 className={style.h2}>Subregion | {subregion}</h3>
                <h3 className={style.h2}>Population | {population}</h3>
                <h3 className={style.h2}>Area | {area} km²</h3>
            </div>
            <div className={style.div2}>
                <h3 className={style.h2}>{officialName}</h3> 
                <h3 className={style.h2}>{commonName}</h3>
                <img src={image} alt={commonName}/>
            </div>
                <h2>Activities</h2>
                {Array.isArray(Activities) && Activities.map((activity) => (
                    <div>
                        <h2>{activity.name.toUpperCase()}</h2>
                        <h3>Difficulty | Lvl {activity.difficulty}</h3>
                        <h3>Duration | {activity.duration.startsWith('00:') ?
                            `${activity.duration} minutes` :
                            `${activity.duration} hours`}
                        </h3>
                        <h3>Season | {activity.season}</h3>
                    </div>
                ))}
            <div>

            </div>
        </div>
    )
}