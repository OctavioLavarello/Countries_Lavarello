const { postUser } = require("../../controllers/post/postUser.js")

const handlerPostUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await postUser(name, email, password);
        return res.status(200).json({message: "User created successfully"});
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

module.exports = {
    handlerPostUser
};
