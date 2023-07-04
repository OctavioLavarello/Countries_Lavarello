const { getCountry } = require("../../controllers/get/getCountry.js")

const handlerCountry = async (req, res) => {
    try {
        const { idCountry } = req.params;
        const country = await getCountry(idCountry);
        return res.status(200).json(country)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}

module.exports = {
    handlerCountry
}