export const getCountryActivity = (state, { payload }) => {
    const countries = state.activities.filter((activity) => {
      return activity.name === payload;
    });
    
    if (payload) {
        return {
            ...state,
            allCountries: countries.map((activity) => activity.Countries[0]),
            continents: countries.map((activity) => activity.Countries[0])
        };
    }
};