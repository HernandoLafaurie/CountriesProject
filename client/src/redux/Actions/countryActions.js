import axios from 'axios'
import { GET_ALL_COUNTRIES_FAILURE, GET_ALL_COUNTRIES_SUCCES } from './types/actionTypes';

export const getAllCountries= () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/countries');
            dispatch({ type: GET_ALL_COUNTRIES_SUCCES, payload: response.data });
        } catch (error) {
            dispatch({ type: GET_ALL_COUNTRIES_FAILURE, payload: error.message });
        }
    }
}