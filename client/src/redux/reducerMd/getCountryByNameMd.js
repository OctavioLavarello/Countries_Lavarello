export const getCountryByName = (state, { payload }) => {
    return {
        ...state,
        searchCountries: payload,
        auxSearchCountries: payload
    }
}