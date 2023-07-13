import { 
    GET_ALL_COUNTRIES, 
    GET_COUNTRY_BY_NAME, 
    GET_COUNTRY_ACTIVITY,
    FILTER_CONTINENT,
    FILTER_ACTIVITY_SEASON,
    FILTER_ACTIVITY_DIFFICULTY,
    ORDER_ALPH,
    ORDER_POPULATION,
    RESET,
    LOGIN,
    LOGOUT,
    REGISTER,
    POST_ACTIVITY,
    GET_ALL_ACTIVITIES,
    CLEAR_STATE,
    ERROR,
    RESET_CONTINET,
} from "./action-types";
import axios from "axios";

export const getAllCountries = () => {
    const endpoint = '/countries';
    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint)
            const { data }  = response;
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data,
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}

export const getCountryByName = (name) => {
    const endpoint = '/countries/name?common=';
    return async (dispatch) => {
        try {
            const response = await axios.get(`${endpoint}${name}`)
            const { data }  = response;
            return dispatch({
                type: GET_COUNTRY_BY_NAME,
                payload: data,
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message,
            });
        };
    };
};

export const getCountryActivity = (activityName) => {
    return {
        type: GET_COUNTRY_ACTIVITY,
        payload: activityName,
    }
};


export const filterContinent = (continent) => {
    return {
        type: FILTER_CONTINENT,
        payload: continent
    };
};

export const filterActivity_Season = (continent) => {
    return {
        type: FILTER_ACTIVITY_SEASON,
        payload: continent
    };
};

export const filterActivity_Difficulty = (lvl) => {
    return {
        type: FILTER_ACTIVITY_DIFFICULTY,
        payload: lvl
    };
};

export const orderAlph = (orden) => {
    return {
        type: ORDER_ALPH,
        payload: orden
    };
}; 

export const orderPopulation = (orden) => {
    return {
        type: ORDER_POPULATION,
        payload: orden
    };
};

export const reset = () => {
    return {
        type: RESET,
    };
};

export const resetContinet = () => {
    return {
        type: RESET_CONTINET,
    };
};

export const login = (userData) => {
    return {
        type: LOGIN,
        payload: userData
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};

export const register = (userData) => {
    return {
        type: REGISTER,
        payload: userData
    };
};

export const clearState = () => {
    return {
        type: CLEAR_STATE
    };
};

export const postActivity = (activity) => {
    const endpoint = '/activities';
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const existingActivity = state.activities.find((activityy) => activityy.name === activity.name && activityy.CountryID === activity.CountryID)
            if (existingActivity) {
                window.alert("That activity already exists")
                return;
            }
            await axios.post(endpoint, activity)
            return dispatch({
                type: POST_ACTIVITY,
                payload: activity,
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message,
            });
        };
    };
};

export const getAllActivities = () => {
    const endpoint = '/activities';
    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint)
            const { data }  = response;
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: data,
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message,
            })
        }
    }
}
