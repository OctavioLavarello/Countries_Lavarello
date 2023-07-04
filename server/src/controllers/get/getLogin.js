const { User } = require("../../db")

const getLogin = async (name, email, password) => {
    try {
        if (!name || !email || !password){
            throw new Error("missing complete data")
        };
        const user = await User.findOne({where: {name, email, password}})
        if (!user){
            throw new Error("User not found")
        };
        return({access: true});
    } catch (error) {
        throw (error.message); 
    }
}

module.exports = {
    getLogin
}
