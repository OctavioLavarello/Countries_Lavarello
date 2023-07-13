/// IMPORTS
import { useState } from "react"
// VALIDATION
import activityValidation from "./activityValidation";
// STYLE
import style from "./FormActivity.module.css"

// FORMACTIVITY
export default function FormActivity () {
    const dispatch = useDispatch();
    // USE EFFECT
    useEffect(() => {
        dispatch(reset())
        dispatch(getAllCountries())
    }, []);
    // GLOBAL STATE
    const { allCountries } = useSelector(state => state)
    // LOCAL STATES
    const [activity, setActivity] = useState({
        name:"",
        difficulty:"", 
        duration:"", 
        season:"",
        country:"",
    });
    const [errors, setErrors] = useState({
        name:""
    });
    // HANDLERS
    const handleChange = (event) => {
        const { name, value } = event.target;
        setActivity((prevActivity) => ({
            ...prevActivity,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para enviar el formulario
    };

    return (
        <div>
            <br />
            <div>
                <img src="" alt="Activity" />
            </div>
            <form className={style.form} onSubmit={handleOnSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="name" className={style.label}
                    >Name</label>
                    <input 
                    name="name"
                    type="name" 
                    placeholder="insert name" 
                    value={activity.name}
                    className={style.input}
                    onChange={handleChange}
                    />
                    {errors.name && <p className={style.validationMessage}>{errors.name}</p>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="difficulty" className={style.label}
                    >Difficulty</label>
                    <select
                    name="difficulty"
                    type="text" 
                    value={activity.difficulty}
                    className={style.input}
                    onChange={handleChange}
                    >
                        <option value=""></option>
                    </select>
                    {errors.difficulty && <p className={style.validationMessage}>{errors.difficulty}</p>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="duration" className={style.label}
                    >Duration</label>
                    <select
                    name="duration"
                    type="text" 
                    value={activity.duration}
                    className={style.input}
                    onChange={handleChange}
                    >
                        <option value="00:30:00">00:30:00</option>
                        <option value="01:00:00">01:00:00</option>
                        <option value="01:30:00">01:30:00</option>
                        <option value="02:00:00">02:00:00</option>
                        <option value="03:00:00">03:00:00</option>
                        <option value="05:00:00">05:00:00</option>
                    </select>
                    {errors.duration && <p className={style.validationMessage}>{errors.duration}</p>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="season" className={style.label}
                    >Season</label>
                    <select 
                    name="season"
                    type="text" 
                    value={activity.season}
                    className={style.input}
                    onChange={handleChange}
                    >
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                    </select>
                    {errors.season && <p className={style.validationMessage}>{errors.season}</p>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="country" className={style.label}
                    >Country</label>
                    <select
                    name="country"
                    type="text" 
                    value={activity.country}
                    className={style.input}
                    onChange={handleChange}
                    >
                        {allCountries.map((country) => {
                            <option value={country}>{country}</option>
                        })}
                    </select>
                    {errors.country && <p className={style.validationMessage}>{errors.country}</p>}
                </div>
                <button 
                className={style.submitButton}
                disabled={
                    !activity.name ||
                    !activity.difficulty ||
                    !activity.duration ||
                    !activity.season ||
                    !activity.country ||
                    errors.name 
                    }
                    >SUBMIT</button>
            </form>
        </div>
    )
}
