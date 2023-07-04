const { getAllCountries } = require("../../controllers/get/getAllCountries.js")

const handlerAllCountries = async (req, res) => {
    try {
        const countriesList = await getAllCountries();
        return res.status(200).json(countriesList);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

module.exports = {
    handlerAllCountries
}