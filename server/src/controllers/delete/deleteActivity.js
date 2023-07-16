const { Activity } = require("../../db");

const deleteActivity = async (idActivity) => {
    try {
        const activity = await Activity.findByPk(idActivity);
        if (!activity || activity.length === 0) {
            throw new Error("Activity not found");
        }
        await Activity.destroy({where: {ID: idActivity}})
    } catch (error) {
        throw error.message;
    }
};

module.exports = {
    deleteActivity,
};