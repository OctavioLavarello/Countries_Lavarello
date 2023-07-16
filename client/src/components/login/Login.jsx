/// IMPORTS
import { useState } from "react"
import { useDispatch } from "react-redux";
// VALIDATION
import loginValidation from "./loginValidation.js";
// ACTIONS
import { login } from "../../redux/actions/actions.js";
import { LOGIN } from "../../redux/actions/action-types.js";
// STYLE
import style from "./Login.module.css"

// LOGIN COMPONENT
export default function Login(props) {
    const { loginNavigate } = props
    // LOCAL STATES
    const [userLogin, setUserLogin] = useState({
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
        setUserLogin((userLogin) => ({
            ...userLogin,
            [name]: value
        }));
        loginValidation(userLogin, setErrors);
    };

    const handlerOnSubmit = async (e) => {
        e.preventDefault();
        const loginResult = await dispatch(login(userLogin));
        dispatch(login(userLogin));
        if (loginResult && loginResult.type === LOGIN) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                message: "login...",
            }));
        setTimeout(() => {
            loginNavigate();
            }, 5000);
        } else {
            window.alert("This user does not exist");
        }
    };

    // RETURN
    return(
        <div className={style.div}>
            <h2>Already have a account?</h2>
            <form onSubmit={handlerOnSubmit} className={style.horizontalForm}>
                <div>
                    <label htmlFor="nickname">NICKNAME</label>
                    <input 
                    name="name"
                    type="name" 
                    placeholder="insert nickname" 
                    value={userLogin.name}
                    onChange={handlerChange}
                    />
                    {errors.name && <p className={style.validationMessage}>{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email">EMAIL</label>
                    <input 
                    name="email"
                    type="email" 
                    placeholder="insert email" 
                    value={userLogin.email}
                    onChange={handlerChange}
                    />
                    {errors.email && <p className={style.validationMessage}>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="password">PASSWORD</label>
                    <input 
                    name="password"
                    type="text" 
                    placeholder="insert password" 
                    value={userLogin.password}
                    onChange={handlerChange}
                    />
                    {errors.password && <p className={style.validationMessage}>{errors.password}</p>}
                </div>
                <button 
                disabled={
                    !userLogin.name ||
                    !userLogin.email ||
                    !userLogin.password ||
                    errors.email ||
                    errors.email ||
                    errors.password
                    }
                    >Log In</button>
                    {errors.message && <p className={style.validationMessageSend}>{errors.message}</p>}
            </form>
        </div>
    )
}
