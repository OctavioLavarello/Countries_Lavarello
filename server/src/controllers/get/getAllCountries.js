const axios = require("axios")

const getAllCountries = async () => {
    try {
        const response = await axios.get("http://localhost:5000/countries");
        const data = response.data
        if (!data || data.length === 0){
            throw new Error ("There aren't countries")
        };
        return data;
    } catch (error) {
        throw error.message;
    }  
}

module.exports = {
    getAllCountries
}    
