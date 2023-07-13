import axios from "axios";

export default async function onSearch (name, searchCountries, setSearchCountries) {
    const country = searchCountries?.find(element => element.commonName === name)
    if (country) {
        window.alert("Already in the list")
        return;
    }
    try {
        const response = await axios.get(`/countries/name?common=${name}`)
        const { data } = response
        if (data.length > 0) {
            setSearchCountries((oldCountries) => [...oldCountries, ...data]);
        } else {
        window.alert('There are no countries with that name');
        return;
        }
    } catch (error) {
        window.alert(error.message)
    }
}