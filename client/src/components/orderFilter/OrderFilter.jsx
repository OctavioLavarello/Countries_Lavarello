///IMPORTS
import { useDispatch, useSelector } from "react-redux";
// ACTIONS
import {  
    filterContinent, 
    orderAlph, 
    orderPopulation, 
    reset, 
    resetContinet, 
    getCountryActivity_Name,
    getCountryActivity_Difficulty,
    getCountryActivity_Duration,
    getCountryActivity_Season
} from "../../redux/actions/actions.js";
// UTILS FILTER ACTIVITY NAME
import uniqueOptions from "./uniqueOptions.js"
// STYLES
import style from "./OrderFilter.module.css";

export default function OrderFilter () {
    // GLOBAL STATE
    const { activities } = useSelector(state => state)
    const dispatch = useDispatch();
    // FILTER ACTIVITY OPTIONS
    const activitiesNames = uniqueOptions(activities, "Name")
    const activitiesDifficulty = uniqueOptions(activities, "Difficulty")
    const activitiesDuration = uniqueOptions(activities, "Duration")
    const activitiesSeason = uniqueOptions(activities, "Season")
    // HANDLERS
    const handleFilterContinent = (e) => {
        dispatch(resetContinet())
        let value = e.target.value
        dispatch(filterContinent(value)) 
    };
    const handlerReset = () => {
        dispatch(reset())
    };
    const handlerOrderAlph = (e) => {
        let value = e.target.value
        dispatch(orderAlph(value))
    };
    const handlerOrderPopulation = (e) => {
        let value = e.target.value
        dispatch(orderPopulation(value))
    };
    const handlerCountry_Activity_Name = (e) => {
        let value = e.target.value
        dispatch(getCountryActivity_Name(value));
    };
    const handlerCountry_Activity_Difficulty = (e) => {
        let value = e.target.value
        dispatch(getCountryActivity_Difficulty(value));
    };
    const handlerCountry_Activity_Duration = (e) => {
        let value = e.target.value
        dispatch(getCountryActivity_Duration(value));
    };
    const handlerCountry_Activity_Season = (e) => {
        let value = e.target.value
        dispatch(getCountryActivity_Season(value));
    }; 
    
    // RETURN
    return (
        <div className={style.container}>
            <div className={style.filter}>
                <h4>ORDER</h4>
                <label>Alphabetically</label>
                <select className={style.select} onChange={handlerOrderAlph}>
                    <option value="A-Z" >A - Z</option>
                    <option value="Z-A" >Z - A</option>
                </select>
                <label>by Population</label>
                <select className={style.select} onChange={handlerOrderPopulation}>
                    <option value="major" >Major</option>
                    <option value="minor" >Minor</option>
                </select>
            <div/>
            <div className={style.filter}>
                <h4>FILTER</h4>
                <label>by Continent</label>
                <select className={style.select} onChange={handleFilterContinent}>
                    {["Africa", "Antarctica", "Asia", "Europe", "North America", "Oceania", "South America"]
                    .map((continent) => (
                    <option 
                    key={continent} 
                    value={continent}
                    >{continent}</option>)
                    )}
                </select>
                <h4></h4>
                <label>by Activity</label>
                <div>
                    <label>Name</label>
                    <select className={style.select} onChange={handlerCountry_Activity_Name}>
                        {activitiesNames.map(
                            (activity) => (
                                <option
                                key={activity.ID} 
                                value={activity.name}
                                >{activity.name}</option>)
                        )}
                    </select>
                    <label>Difficulty</label>
                    <select className={style.select} onChange={handlerCountry_Activity_Difficulty}>
                        {activitiesDifficulty.map(
                            (activity) => (
                                <option 
                                key={activity.ID}
                                value={activity.difficulty}
                                >{activity.difficulty}</option>)
                        )}
                    </select >
                    <label>Duration</label>
                    <select className={style.select} onChange={handlerCountry_Activity_Duration}>
                        {activitiesDuration.map(
                            (activity) => (
                                <option 
                                key={activity.ID}  
                                value={activity.duration}
                                >{activity.duration}</option>)
                        )}
                    </select>
                    <label>Season</label>
                    <select className={style.select} onChange={handlerCountry_Activity_Season}>
                        {activitiesSeason.map(
                            (activity) => (
                                <option 
                                key={activity.ID} 
                                value={activity.season}
                                >{activity.season}</option>)
                        )}
                    </select>
                </div>
            </div>
                <button onClick={handlerReset}>Reset</button>
            </div>
        </div>
    )
}