import {combineReducers} from 'redux';
import artboards from './artboards';
import auth from './auth';

export default combineReducers({
    artboards,
    auth
})
