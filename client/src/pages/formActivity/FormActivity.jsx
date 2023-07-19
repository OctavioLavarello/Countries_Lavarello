/// IMPORTS
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import DeleteActivity from "../../components/deleteActivity/DeleteActivity.jsx"
// VALIDATION
import activityValidation from "./activityValidation.js";
// ACTIONS
import { getAllCountries, postActivity, reset } from "../../redux/actions/actions";
// STYLE
import style from "./FormActivity.module.css"
// import img from "../../assets/backgrounds/collage2.png"
// FORMACTIVITY
export default function FormActivity() {
    const dispatch = useDispatch();
    // USE EFFECT
    useEffect(() => {
        dispatch(reset())
        dispatch(getAllCountries())
    }, []);
    // GLOBAL STATE
    const { allCountries } = useSelector(state => state)
    // UTIL ORDER A-Z
    const orderCountries = allCountries ? allCountries.slice() : []
    const order = orderCountries ? orderCountries.sort((a,b) => a.commonName > b.commonName ? 1 : -1) : []
    // LOCAL STATES
    const [activity, setActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        CountryID: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        message: "",
    });

    const handlerChange = (e) => {
        const { name, value } = e.target;
        setActivity((activity) => ({
            ...activity,
            [name]: value
        }));
        activityValidation(activity, setErrors);
    };

    const handlerOnSubmit = async (e) => {
        e.preventDefault();
        dispatch(postActivity(activity))
        setErrors((prevErrors) => ({
            ...prevErrors,
            message: "Activity created successfully"
        }))
    };
    return (
        <div className={style.bigContainer}>
            <br/>
            <div className={style.container}>
                <h2 className={style.h2}>Create your Activity</h2>
                <form className={style.form} onSubmit={handlerOnSubmit}>
                    <div className={style.formGroup}>
                        <label htmlFor="name" className={style.label}
                        >Name</label>
                        <input 
                        name="name"
                        type="name" 
                        placeholder="insert name" 
                        value={activity.name}
                        className={style.input}
                        onChange={handlerChange}
                        />
                        {errors.name && <p className={style.validationMessage}>{errors.name}</p>}
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="difficulty" className={style.label}
                        >Difficulty</label>
                        <select
                        name="difficulty"
                        value={activity.difficulty}
                        className={style.input}
                        onChange={handlerChange}
                        >
                            <option value="">.</option>
                            <option value="1">Lvl 1</option>
                            <option value="2">Lvl 2</option>
                            <option value="3">Lvl 3</option>
                            <option value="4">Lvl 4</option>
                            <option value="5">Lvl 5</option>
                        </select>
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="duration" className={style.label}
                        >Duration</label>
                        <select
                        name="duration"
                        value={activity.duration}
                        className={style.input}
                        onChange={handlerChange}
                        >
                            <option value="">.</option>
                            <option value="00:30:00">30 minutes</option>
                            <option value="01:00:00">1 hour</option>
                            <option value="01:30:00">1.5 hours</option>
                            <option value="02:00:00">2 hours</option>
                            <option value="03:00:00">3 hours</option>
                            <option value="05:00:00">5</option>
                        </select>
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="season" className={style.label}
                        >Season</label>
                        <select 
                        name="season"
                        value={activity.season}
                        className={style.input}
                        onChange={handlerChange}
                        >
                            <option value="">.</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="CountryID" className={style.label}
                        >Country</label>
                        <select
                        name="CountryID"
                        value={activity.CountryID}
                        className={style.input}
                        onChange={handlerChange}
                        >
                            <option value="">.</option>
                            {order ? order.map((country) => (
                                <option key={country.ID} value={country.ID}>{country.commonName}</option>
                            )) : []}
                        </select>
                    </div>
                    <button 
                    className={style.submitButton}
                    disabled={
                        !activity.name ||
                        errors.name 
                        }
                        >SUBMIT</button>
                        {errors.message && <p className={style.validationMessageSend}>{errors.message}</p>}
                </form>
            </div>
            <div className={style.container}>
                <DeleteActivity />
            </div>
        </div>
    )
}







