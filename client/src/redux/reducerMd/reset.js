export const reset = (state) => {
    return {
        ...state,
        allCountries: state.auxCountries
    }
}