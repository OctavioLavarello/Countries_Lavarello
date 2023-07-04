const { getNameCountry } = require("../../controllers/get/getNameCountry.js")

const handlerNameCountry = async (req, res) => {
    try {
        const { common } = req.query;
        const name = await getNameCountry(common);
        return res.status(200).json(name);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

module.exports = { 
    handlerNameCountry
}