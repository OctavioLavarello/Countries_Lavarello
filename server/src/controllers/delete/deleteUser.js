const { User } = require("../../db");

const deleteUser = async (idUser) => {
    try {
        const user = await User.findByPk(idUser);
        if (!user || user.length === 0) {
            throw new Error("Activity not found");
        }
        await User.destroy({where: {ID: idUser}})
    } catch (error) {
        throw error.message;
    }
};

module.exports = {
    deleteUser,
};