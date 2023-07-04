const { getActivities } = require("../../controllers/get/getActivities.js")

const handlerGetActivities = async (req, res) => {
    try {
        const activities = await getActivities();
        return res.status(200).json(activities);
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}

module.exports = {
    handlerGetActivities
};
