import { combineReducers } from 'redux';
import LoadSettings from './SettingsReducer';
import SearchReducer from './SearchReducer';
import HistoryReducer from './HistoryReducer';
import FavouritesReducer from './FavouritesReducer';

export default combineReducers({
	LoadSettings, SearchReducer, HistoryReducer, FavouritesReducer
});
