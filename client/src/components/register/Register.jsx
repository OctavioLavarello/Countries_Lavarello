/// IMPORTS
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
// VALIDATION
import registerValidation from "./registerValidation.js";
// ACTIONS
import { register } from "../../redux/actions/actions.js";
// STYLE
import style from "./Register.module.css"

// REGISTER COMPONENT
export default function Register () {
    // LOCAL STATES
    const [userRegister, setUserRegister] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        message: "",
    });

    const dispatch = useDispatch();
    // HANDLERS
    const handlerChange = (e) => {
        const { name, value } = e.target;
        setUserRegister((userRegister) => ({
            ...userRegister,
            [name]: value
        }));
        registerValidation(userRegister, setErrors);
    };

    const handlerOnSubmit = (e) => {
        e.preventDefault();
        dispatch(register(userRegister))
        setErrors((prevErrors) => ({
            ...prevErrors,
            message: "User created successfully"
        }))
        setUserRegister(
            {
                name: "",
                email: "",
                password: "",
            }
        )
    };

    //RETURN
    return(
        <div>
            <h2>Get started Now...</h2>
            <h3>and see the world!</h3>
            <form className={style.form} onSubmit={handlerOnSubmit}>
                <div className={style.formGroup}>
                    <label className={style.label}
                    >NICKNAME</label>
                    <input
                    className={style.input}
                    name="name"
                    type="name"
                    value={userRegister.name}
                    placeholder="insert nickname"
                    onChange={handlerChange} 
                    />
                    {errors.name && <p className={style.validationMessage}>{errors.name}</p>}
                </div>
                <div className={style.formGroup}>
                    <label className={style.label}
                    >EMAIL</label>
                    <input
                    className={style.input} 
                    name="email"
                    type="email"
                    value={userRegister.email} 
                    placeholder="insert email"
                    onChange={handlerChange} 
                    />
                    {errors.email && <p className={style.validationMessage}>{errors.email}</p>}
                </div>
                <div className={style.formGroup}>
                    <label className={style.label}
                    >PASSWORD</label>
                    <input
                    className={style.input} 
                    name="password"
                    type="text"
                    value={userRegister.password}
                    placeholder="insert password"
                    onChange={handlerChange} 
                    />
                    {errors.password && <p className={style.validationMessage}>{errors.password}</p>}
                </div>
                <button
                disabled={
                    !userRegister.name ||
                    !userRegister.email ||
                    !userRegister.password ||
                    errors.email ||
                    errors.email ||
                    errors.password
                    }
                className={style.submitButton}
                >Sing Up</button>
                {errors.message && <p className={style.validationMessageSend}>{errors.message}</p>}
            </form>
        </div>
    )
}