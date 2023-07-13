export const orderAlph = (state, { payload }) => {
    let orde;
    let orde2;
    let orderCountry = state.allCountries.slice()
    let orderCountrySearch = state.searchCountries.slice()
    if (payload === "A-Z"){
        orde = orderCountry.sort((a,b) => a.commonName > b.commonName ? 1 : -1)
        orde2 = orderCountrySearch.sort((a,b) => a.commonName > b.commonName ? 1 : -1)
    }
    else {
        orde = orderCountry.sort((a,b) => b.commonName > a.commonName ? 1 : -1),
        orde2 = orderCountrySearch.sort((a,b) => b.commonName > a.commonName ? 1 : -1)
    }
    return {
        ...state,
        allCountries: orde,
        searchCountries: orde2,
    }
}