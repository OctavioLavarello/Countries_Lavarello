export const filterContinent = (state, { payload }) => {
    let filterByContinent = state.allCountries.filter(
        (country) => country.continent === payload
    )
    let filterByContinentSearch = state.searchCountries.filter(
        (country) => country.continent === payload
    )

    return {
        ...state,
        allCountries: filterByContinent,
        searchCountries: filterByContinentSearch
    }
}