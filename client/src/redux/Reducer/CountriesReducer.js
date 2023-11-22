import { GET_ALL_COUNTRIES_FAILURE, GET_ALL_COUNTRIES_SUCCES } from '../Actions/types/actionTypes'

const initialState = {
    countries: [],
    error: null,
};
  
const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES_SUCCES:
            return {
                ...state,
                countries: action.payload,
                error: null,
            }
        case GET_ALL_COUNTRIES_FAILURE:
            return {
                ...state,
                countries: null,
                error: action.payload
            }
        default:
            return state;
    }
};
  
export default countriesReducer;