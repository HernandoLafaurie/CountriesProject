import { combineReducers } from 'redux';
import countriesReducer from './CountriesReducer';


const rootReducer = combineReducers({

	country: countriesReducer

});

export default rootReducer;