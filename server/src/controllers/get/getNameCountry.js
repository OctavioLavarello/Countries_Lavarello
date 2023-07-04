const axios = require("axios");

const getNameCountry = async (common) => {
    try {
        const response = await axios.get("http://localhost:5000/countries");
        const data = response.data;
        if (!data || data.length === 0){
            throw new Error ("There aren't countries")
        };
        const commonName = data.filter((country) => {
            if (country.name && country.name.common && country.name.common.toLowerCase().includes(common.toLowerCase())){
              return true;
            }
            return false;
        });
        return commonName;
    } catch (error) {
        throw (error.message);
    }  
}

module.exports = {
    getNameCountry
}    
