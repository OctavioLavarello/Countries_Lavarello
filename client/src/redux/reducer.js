/// IMPORTS
// ACTION-TYPES
import { 
    GET_ALL_COUNTRIES, 
    GET_ALL_USERS,
    GET_COUNTRY_BY_NAME, 
    GET_COUNTRY_ACTIVITY_NAME,
    GET_COUNTRY_ACTIVITY_DIFFICULTY,
    GET_COUNTRY_ACTIVITY_DURATION,
    GET_COUNTRY_ACTIVITY_SEASON,
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
    GET_COUNTRY_BY_ID,
    ACCESS,
} from "./actions/action-types";
// REDUCER MD
import { getAllCountries } from "./reducerMd/getAllCountries.js";
import { getAllUsers } from "./reducerMd/getAllUsers"
import { getCountryByID } from "./reducerMd/getCountryByID.js";
import { getCountryByName } from "./reducerMd/getCountryByNameMd.js";
import { getCountryActivity_Name, getCountryActivity_Difficulty, getCountryActivity_Duration, getCountryActivity_Season } from "./reducerMd/getCountryActivity.js";
import { filterContinent } from "./reducerMd/filterContinent.js";
import { filterActivity_Season } from "./reducerMd/filterActivity_Season.js";
import { filterActivity_Difficulty } from "./reducerMd/filterActivity_Difficulty";
import { orderAlph } from "./reducerMd/orderAlph.js";
import { orderPopulation } from "./reducerMd/orderPopulation";
import { reset } from "./reducerMd/reset.js";
import { login } from "./reducerMd/login.js";
import { logout } from "./reducerMd/logout.js";
import { register } from "./reducerMd/register.js";
import { getAllActivities } from "./reducerMd/getAllActivities.js";
import { clearState } from "./reducerMd/clearState.js";
import { error } from "./reducerMd/error.js";
import { resetContinent } from "./reducerMd/resetContinent.js"
import { access } from "./reducerMd/access.js"
// INITIAL STATE
const initialState = {
    allCountries: [],
    auxCountries: [],
    searchCountries: [],
    auxSearchCountries: [],
    countryByID: [],
    continents: [],
    activities: [],
    users: [],
    access: false,
    error: null,
};
// REDUCER
export default function reducer (state = initialState, action) {
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return getAllCountries(state, action);
        case GET_ALL_USERS:
            return getAllUsers(state, action);
        case GET_COUNTRY_BY_ID:
            return getCountryByID(state, action)
        case GET_COUNTRY_BY_NAME:
            return getCountryByName(state, action); 
        case GET_COUNTRY_ACTIVITY_NAME:
            return getCountryActivity_Name(state, action); 
        case GET_COUNTRY_ACTIVITY_DIFFICULTY:
            return getCountryActivity_Difficulty(state, action); 
        case GET_COUNTRY_ACTIVITY_DURATION:
            return getCountryActivity_Duration(state, action); 
        case GET_COUNTRY_ACTIVITY_SEASON:
            return getCountryActivity_Season(state, action); 
        case FILTER_CONTINENT:
            return filterContinent(state, action);
        case FILTER_ACTIVITY_SEASON:
            return filterActivity_Season(state, action);
        case FILTER_ACTIVITY_DIFFICULTY:
            return filterActivity_Difficulty(state, action);
        case ORDER_ALPH:
            return orderAlph(state, action);
        case ORDER_POPULATION:
            return orderPopulation(state, action);
        case RESET:
            return reset(state);
        case RESET_CONTINET:
            return resetContinent(state);
        case LOGIN:
            return login(state) 
        case LOGOUT:
            return logout(state) 
        case REGISTER:
            return register(state, action) 
        case GET_ALL_ACTIVITIES:
            return getAllActivities(state, action)
        case CLEAR_STATE:
            return clearState (state) 
        case ERROR:
            return error (state, action) 
        case ACCESS:
            return access (state, action) 
        default:
            return {...state}
    }
}