const { Activity, Country } = require("../../db.js")

const postActivities = async (name, difficulty, duration, season, CountryID) => {
    try {
        if(!name || !difficulty || !duration || !season){
            throw new Error ("missing complete data")
        }
        const [newActivity, created] = await Activity.findOrCreate({
            where:{
                name, difficulty, duration, season 
            }
        })
        if (!created) {
            throw new Error("Activity already in database");
        }
        const country = await Country.findByPk(CountryID);
        if (!country) {
            throw new Error("Country not found");
        }
        await newActivity.setCountry(country)
        return newActivity;
    } catch (error) {
        throw (error.message);
    }
}

module.exports = {
    postActivities
};
