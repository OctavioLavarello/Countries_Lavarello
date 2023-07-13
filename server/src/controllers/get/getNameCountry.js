const { Country } = require("../../db")

const getNameCountry = async (common) => {
    try {
        const countriesList = await Country.findAll();
        if (!countriesList || countriesList.length === 0){
            throw new Error ("There are no countries")
        };
        const commonName = countriesList.filter((country) => {
            if (
                country.commonName && country.commonName.toLowerCase().includes(common.toLowerCase()) ||
                country.officialName && country.officialName.toLowerCase().includes(common.toLowerCase())
            ){
                return true;
            }
            return false;
        });
        if (!commonName || commonName.length === 0) {
            throw new Error("That country doesn't exist");
        };
        return commonName;
    } catch (error) {
        throw (error.message);
    }  
}

module.exports = {
    getNameCountry
}    
