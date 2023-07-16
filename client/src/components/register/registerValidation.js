export default function registerValidation (userRegister, setErrors) {
    const { name, email, password } = userRegister
    // EMAIL REGEX
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // PASSWORD REGEX
    const passwordNumRegex = /\d/;
    // NAME VALIDATION
    if (!name) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: "Enter your name",
        }));
    } else if (name.length < 3 || name.length > 15){
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: "Name must be between 3 and 15 characters"
        }))
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: "",
        }));
    };
    // EMAIL VALIDATION
    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email",
      }));
    } else if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Enter your email",
      }));
    } else if (email.length > 35) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email cannot be longer than 35 characters",
      }));
    } 
    else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    };
    // PASSWORD VALIDATION
    if (!password) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            password: "Enter your password",
        }));
    } else if (password.length < 3 ){
        setErrors((prevErrors) => ({
            ...prevErrors,
            password: "Password must have more than 3 letters"
        }))
    } else if (!passwordNumRegex.test(password)){
        setErrors((prevErrors) => ({
            ...prevErrors,
            password: "Name must have a number"
        }))
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            password: "",
        }));
    }
}