import axios from "axios";

export default async function getAllCountries (setAllCountries) {
    try {
        const response = await axios.get(`/countries`)
        const { data } = response
        if (!data || data.length === 0) {
            window.alert('There are no countries');
            return;
        } 
        setAllCountries(data);
    } catch (error) {
        window.alert(error.message)
    }
}