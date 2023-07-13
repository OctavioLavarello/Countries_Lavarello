const { Country, Activity } = require("../../db")

const getCountry = async (idCountry) => {
    try {
        const country = await Country.findOne({
            where: { ID: idCountry },
            include: [Activity],
        });
        if (!country){
            throw new Error ("country not found")
        };
        return country;
    } catch (error) {
        throw (error.message);
    }  
}

module.exports = {
    getCountry
}    
