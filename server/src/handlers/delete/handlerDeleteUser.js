const { deleteUser } = require("../../controllers/delete/deleteUser.js")

const handlerDeleteUser = async (req, res) => {
    try {
        const { idUser } = req.params;
        await deleteUser(idUser);
        return res.status(200).json("User deleted successfully")
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}

module.exports = {
    handlerDeleteUser
}