const activityValidation = function (activity, setErrors) {
    const { name } = activity
    /// REGEX
    const nameNotNumberUpperLowerRegex = /^[A-Z][a-z]*$/
    // NAME VALIDATION
    if (name.length < 3 ){
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: "Name must have more than 3 letters"
        }))
    } else if (!nameNotNumberUpperLowerRegex.test(name)){
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: "Name must begin with a capital letter and must not contain numbers"
        }))
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: "",
        }));
    }
}

export default activityValidation
