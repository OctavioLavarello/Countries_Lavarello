export const clearState = ( state ) => {
    return {
        ...state,
        searchCountries: [],
        auxSearchCountries: []
    };
}