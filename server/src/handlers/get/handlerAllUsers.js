const { getAllUsers } = require("../../controllers/get/getAllUsers.js")

const handlerAllUsers = async (req, res) => {
    try {
        const usersList = await getAllUsers();
        return res.status(200).json(usersList);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

module.exports = {
    handlerAllUsers
}