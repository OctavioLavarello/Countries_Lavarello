const axios = require("axios")

const getCountry = async (idCountry) => {
    try {
        const response = await axios.get(`http://localhost:5000/countries`);
        const data = response.data;
        if (!data || data.length === 0){
            throw new Error ("There aren't countries")
        };
        const country = data.find((country) => country.tld.includes(idCountry));
        if (!country){
            throw new Error ("country not found")
        }
        return country
    } catch (error) {
        throw (error.message);
    }  
}

module.exports = {
    getCountry
}    
