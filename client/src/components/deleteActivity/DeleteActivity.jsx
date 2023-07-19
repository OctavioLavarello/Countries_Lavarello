///IMPORTS
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
// ACTIONS
import { deleteActivity } from "../../redux/actions/actions.js" 
// STYLES
import style from "./DeleteActivity.module.css"

// DELETE ACTIVITY
export default function DeleteActivity () {
    // GLOBAL STATES
    const { activities } = useSelector(state => state)
    // LOCAL STATE
    const [activityToDelete, setActivityToDelete] = useState({
        activityID: ""
    });
    const dispatch = useDispatch();
    // HANLDERS
    // onchange
    const handlerActivityToDelete = (e) => {
        const { name, value } = e.target;
        setActivityToDelete((activity) => ({
            ...activity,
            [name]: value
        }));
    }
    const handlerDelete = () => {
        dispatch(deleteActivity(activityToDelete.activityID))
    }
    //RETURN
    return (
        <div className={style.div}>
            <h2>Delete Activity</h2>
            <select 
            name="activityID" 
            value={activityToDelete.activityID}
            onChange={handlerActivityToDelete}
            >
                {activities.map((activity) => 
                <option
                key={activity.ID}
                value={activity.ID}
                >
                    {activity.name}, 
                    Difficulty: {activity.difficulty}, 
                    Duration: {activity.duration}, 
                    Season: {activity.season}, 
                    Country: {activity.Countries[0].commonName}
                </option>
                )}
            </select>
            <h3></h3>
            <button onClick={handlerDelete}>Delete</button>
        </div>
    )
}