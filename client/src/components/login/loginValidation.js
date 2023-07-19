export default function loginValidation (userLogin, setErrors) {
  const { name, email, password } = userLogin
  // NAME VALIDATION
  if (!name) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: "Enter your name",
    }));
  } else {
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: "",
    }));
  };
  // EMAIL VALIDATION
  if (!email) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: "Enter your email",
    }));
  } else {
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
  } else {
    setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
    }));
  }
}