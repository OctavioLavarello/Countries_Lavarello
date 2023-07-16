export const getCountryByID = (state, { payload }) => {
    return {
        ...state,
        countryByID: payload
    }
}