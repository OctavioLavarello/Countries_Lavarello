const { deleteActivity } = require("../../controllers/delete/deleteActivity.js")

const handlerDeleteActivity = async (req, res) => {
    try {
        const { idActivity } = req.params;
        await deleteActivity(idActivity);
        return res.status(200).json("activity deleted successfully")
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}

module.exports = {
    handlerDeleteActivity
}