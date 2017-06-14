import { AsyncStorage } from 'react-native';

import {
	LOAD_SETTINGS,
	AUTOCOMPLETE_SETTING,
	QUACK_ON_REFRESH_SETTING,
	SAVE_RECENT_SETTING
} from './types';


export const changeAutocompleteSetting = (autocomplete) => {
	return (dispatch) => {
		dispatch({
			type: AUTOCOMPLETE_SETTING,
			payload: autocomplete
		})
	}
}

export const changeQuackOnRefreshSetting = (quack_on_refresh) => {
	return (dispatch) => {
		dispatch({
			type: QUACK_ON_REFRESH_SETTING,
			payload: quack_on_refresh
		})
	}
}

export const changeSaveRecentSetting = (save_recent) => {
	return (dispatch) => {
		dispatch({
			type: SAVE_RECENT_SETTING,
			payload: save_recent
		})
	}
}

export const loadSettings = (autocomplete) => async dispatch => {
    dispatch({
		type: LOAD_SETTINGS,
		payload: autocomplete
	})

    /*
	let autocomplete_value = await AsyncStorage.getItem('autocomplete');

	if (autocomplete_value) {
		if ( autocomplete_value === 'on' ){
			dispatch({
				type: LOAD_SETTINGS,
				payload: autocomplete
			});
		} else {
			dispatch({
				type: LOAD_SETTINGS,
				payload: autocomplete
			});
		}

	} else {
		await AsyncStorage.setItem('autocomplete', autocomplete);
		dispatch({
			type: LOAD_SETTINGS,
			payload: autocomplete
		});
	}
	*/
};
