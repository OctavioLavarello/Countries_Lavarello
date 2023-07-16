export const getCountryActivity_Name = (state, { payload }) => {
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

export const getCountryActivity_Difficulty = (state, { payload }) => {
    const countries = state.activities.filter((activity) => {
      return activity.difficulty === Number(payload);
    });
    
    if (payload) {
        return {
            ...state,
            allCountries: countries.map((activity) => activity.Countries[0]),
            continents: countries.map((activity) => activity.Countries[0])
        };
    }
};

export const getCountryActivity_Duration = (state, { payload }) => {
    const countries = state.activities.filter((activity) => {
      return activity.duration === payload;
    });
    
    if (payload) {
        return {
            ...state,
            allCountries: countries.map((activity) => activity.Countries[0]),
            continents: countries.map((activity) => activity.Countries[0])
        };
    }
};

export const getCountryActivity_Season = (state, { payload }) => {
    const countries = state.activities.filter((activity) => {
      return activity.season === payload;
    });
    
    if (payload) {
        return {
            ...state,
            allCountries: countries.map((activity) => activity.Countries[0]),
            continents: countries.map((activity) => activity.Countries[0])
        };
    }
};