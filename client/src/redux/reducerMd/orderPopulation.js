export const orderPopulation = (state, { payload }) => {
    let orde;
    let orde2;
    let orderCountry = state.allCountries.slice()
    let orderCountrySearch = state.searchCountries.slice()
    if (payload === "major"){
        orde = orderCountry.sort((a,b) => b.population > a.population ? 1 : -1)
        orde2 = orderCountrySearch.sort((a,b) => b.population > a.population ? 1 : -1)
    }
    else {
        orde = orderCountry.sort((a,b) => a.population > b.population ? 1 : -1)
        orde2 = orderCountrySearch.sort((a,b) => a.population > b.population ? 1 : -1)
    }
    return {
        ...state,
        allCountries: orde,
        searchCountries: orde2,
    }
}