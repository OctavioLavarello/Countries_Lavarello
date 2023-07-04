const { postActivities } = require("../../controllers/post/postActivities.js")

const handlerPostActivities = async (req, res) => {
    try {
        const { name, difficulty, duration, season, CountryID } = req.body;
        await postActivities(name, difficulty, duration, season, CountryID);
        return res.status(200).json({message: "Activity created successfully"})
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}

module.exports = {
    handlerPostActivities
};
