export const resetContinent = (state) => {
    return {
        ...state,
        allCountries: state.continents
    }
}