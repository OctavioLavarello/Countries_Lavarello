const { getLogin } = require("../../controllers/get/getLogin");

const handlerGetLogin = async (req, res) => {
    try {
        const { name, email, password } = req.query;
        const login = await getLogin(name, email, password)
        return res.status(200).json(login);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

module.exports = { 
    handlerGetLogin
}