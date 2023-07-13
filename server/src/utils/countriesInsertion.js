const axios = require("axios");
const { Country } = require("../db.js");

const countriesInsertion = async () => {
    try {
        const response = await axios.get("http://localhost:5000/countries");
        const data = response.data;
        if (!data || data.length === 0) {
            throw new Error("There aren't countries");
        }
        let bulkCreate = []
        await data.map(async (country) => {
            let newCountry = {
                ID: country.cioc? country.cioc : country.cca3,
                commonName: country.name.common,
                officialName: country.name.official,
                continent: country.continents[0],
                image: country.flags.png,                  
                subregion: country.subregion? country.subregion : "has no subregion",                
                capital: country.capital? country.capital[0] : "has no capital",                  
                population: country.population,                
                area: country.area
            }
            await bulkCreate.push(newCountry)
        });
        await Country.bulkCreate(bulkCreate)
        console.log("Inserting data into the database");
        console.log("Total countries:", data.length)
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    countriesInsertion
};

