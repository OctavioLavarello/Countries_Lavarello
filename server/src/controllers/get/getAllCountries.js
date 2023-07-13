const { Country } = require("../../db.js")

const getAllCountries = async () => {
    try {
        const countriesList = await Country.findAll()
        if (!countriesList || countriesList.length === 0){
            throw new Error ("There are no countries")
        };
        return countriesList;
    } catch (error) {
        throw error.message;
    }  
}

module.exports = {
    getAllCountries
}    
