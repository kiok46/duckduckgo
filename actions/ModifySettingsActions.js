import { AsyncStorage } from 'react-native';

import {
	AUTOCOMPLETE_SETTING,
	QUACK_ON_REFRESH_SETTING,
	SAVE_RECENT_SETTING
} from './types';

import { INITIAL_STATE } from '../reducers/LoadSettingsReducer';


export const changeAutocompleteSetting = (toLoad=false) => async dispatch => {

	let autocomplete_value = await AsyncStorage.getItem('autocomplete_value');
	autocomplete_value = JSON.parse(autocomplete_value)

	if ( autocomplete_value !== null ) {
		if (toLoad === true) {
			dispatch({
				type: AUTOCOMPLETE_SETTING,
				payload: autocomplete_value
			})
		} else {
			if (autocomplete_value === true) {
				await AsyncStorage.setItem('autocomplete_value', JSON.stringify(false));
				dispatch({
					type: AUTOCOMPLETE_SETTING,
					payload: false
				})
			} else {
				await AsyncStorage.setItem('autocomplete_value', JSON.stringify(true));
				dispatch({
					type: AUTOCOMPLETE_SETTING,
					payload: true
				})
			}
		}

	} else {
		await AsyncStorage.setItem('autocomplete_value', JSON.stringify(INITIAL_STATE.autocomplete));
		dispatch({
			type: AUTOCOMPLETE_SETTING,
			payload: INITIAL_STATE.autocomplete
		})
	}
}

export const changeQuackOnRefreshSetting = (toLoad=false) => async dispatch => {

	let quack_on_refresh_value = await AsyncStorage.getItem('quack_on_refresh_value');
	quack_on_refresh_value = JSON.parse(quack_on_refresh_value)

	if ( quack_on_refresh_value !== null ) {
		if (toLoad === true) {
			dispatch({
				type: QUACK_ON_REFRESH_SETTING,
				payload: quack_on_refresh_value
			})
		} else {
			if (quack_on_refresh_value === true) {
				await AsyncStorage.setItem('quack_on_refresh_value', JSON.stringify(false));
				dispatch({
					type: QUACK_ON_REFRESH_SETTING,
					payload: false
				})
			} else {
				await AsyncStorage.setItem('quack_on_refresh_value', JSON.stringify(true));
				dispatch({
					type: QUACK_ON_REFRESH_SETTING,
					payload: true
				})
			}
	    }
	} else {
		await AsyncStorage.setItem('quack_on_refresh_value', JSON.stringify(INITIAL_STATE.quack_on_refresh));
		dispatch({
			type: QUACK_ON_REFRESH_SETTING,
			payload: INITIAL_STATE.quack_on_refresh
		})
	}

}

export const changeSaveRecentSetting = (toLoad=false) => async dispatch => {
	let save_recent_value = await AsyncStorage.getItem('save_recent_value');
	save_recent_value = JSON.parse(save_recent_value)

	if ( save_recent_value !== null ) {
		if (toLoad === true) {
			dispatch({
				type: SAVE_RECENT_SETTING,
				payload: save_recent_value
			})
		} else {
			if (save_recent_value === true) {
				await AsyncStorage.setItem('save_recent_value', JSON.stringify(false));
				dispatch({
					type: SAVE_RECENT_SETTING,
					payload: false
				})
			} else {
				await AsyncStorage.setItem('save_recent_value', JSON.stringify(true));
				dispatch({
					type: SAVE_RECENT_SETTING,
					payload: true
				})
			}
	    }
	} else {
		await AsyncStorage.setItem('save_recent_value', JSON.stringify(INITIAL_STATE.save_recent));
		dispatch({
			type: SAVE_RECENT_SETTING,
			payload: INITIAL_STATE.save_recent
		})
	}
}
