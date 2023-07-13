import { useState } from "react"
import validation from "./validation.jsx";

export default function Login(props) {
    const { login } = props
    const [userData, setUserData] = useState({
        nickname: "",
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        nickname: "",
        email: "",
        password: ""
    })
    
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })   
        validation(userData, setErrors)
    }
    
    const handleOnSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div>
            <h2>Already have a account?</h2>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label htmlFor="nickname">NICKNAME</label>
                    <input 
                    name="nickname"
                    type="nickname" 
                    placeholder="insert nickname" 
                    value={userData.nickname}
                    onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="email">EMAIL</label>
                    <input 
                    name="email"
                    type="email" 
                    placeholder="insert email" 
                    value={userData.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="password">PASSWORD</label>
                    <input 
                    name="password"
                    type="text" 
                    placeholder="insert password" 
                    value={userData.password}
                    onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button 
                disabled={
                    !userData.email ||
                    !userData.password ||
                    errors.email ||
                    errors.password
                    }
                    >Log In</button>
            </form>
        </div>
    )
}
