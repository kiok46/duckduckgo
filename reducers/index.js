import { combineReducers } from 'redux';
import LoadSettings from './LoadSettingsReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
	LoadSettings, SearchReducer
});
