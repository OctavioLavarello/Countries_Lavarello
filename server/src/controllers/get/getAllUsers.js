const { User } = require("../../db.js")

const getAllUsers = async () => {
    try {
        const userList = await User.findAll()
        if (!userList || userList.length === 0){
            throw new Error ("There are no users")
        };
        return userList;
    } catch (error) {
        throw error.message;
    }  
}

module.exports = {
    getAllUsers
}    
