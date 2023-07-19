export const filterContinent = (state, { payload }) => {
    let filterByContinent = state.auxCountries.filter(
        (country) => country.continent === payload
    )
    let filterByContinentSearch = state.auxSearchCountries.filter(
        (country) => country.continent === payload
    )

    return {
        ...state,
        allCountries: filterByContinent,
        searchCountries: filterByContinentSearch
    }
}