const { Activity, Country } = require("../../db");

const getActivities = async () => {
  try {
    const activities = await Activity.findAll({
      include: [Country],
    });

    if (!activities || activities.length === 0) {
      throw new Error("There are no activities");
    }

    return activities;
  } catch (error) {
    throw error.message;
  }
};

module.exports = {
  getActivities,
};