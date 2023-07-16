export const reset = (state) => {
    return {
        ...state,
        allCountries: state.auxCountries,
        searchCountries: state.auxSearchCountries
    }
}