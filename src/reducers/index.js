import { combineReducers } from 'redux';
import {results} from '../reducers/searchItemReducer';
import planetList from '../reducers/loadPlanetReducer';

export default combineReducers({
    planetList,
    results
});