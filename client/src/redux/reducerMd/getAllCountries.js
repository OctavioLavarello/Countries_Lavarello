export const getAllCountries = (state, { payload }) => {
    return {
        ...state,
        allCountries: payload,
        auxCountries: payload,
        continents: payload
    }
}