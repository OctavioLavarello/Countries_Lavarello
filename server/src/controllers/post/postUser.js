const { User } = require("../../db")

const postUser = async (name, email, password) => {
    try {
        if (!name || !email || !password){
            throw new Error("Missing complete data")
        };
        const [user, created] =  await User.findOrCreate({
            where: { name, email, password },
        });
        if (!created) {
            throw new Error("User already in database");
        };
        return user; 
    } catch (error) {
        throw (error.message);
    };
};
 
module.exports = {
    postUser
}    

