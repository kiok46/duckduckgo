import { AsyncStorage } from 'react-native';

import {
	LOAD_SEARCH_HISTORY_ITEMS
} from './types';

import { INITIAL_STATE } from '../reducers/SearchReducer';


export const getSearchHistory = (searchQuery="") => async dispatch => {

	let search_history_items = await AsyncStorage.getItem('search_history_items');
	search_history_items = JSON.parse(search_history_items)

	if ( search_history_items !== null ) {
		if (searchQuery !== "") {
			search_history_items.push(searchQuery)
			await AsyncStorage.setItem('search_history_items', JSON.stringify(search_history_items));
			dispatch({
				type: LOAD_SEARCH_HISTORY_ITEMS,
				payload: search_history_items
			})
		}
	} else {
		await AsyncStorage.setItem('search_history_items', JSON.stringify(INITIAL_STATE.search_history_items));
		dispatch({
			type: LOAD_SEARCH_HISTORY_ITEMS,
			payload: INITIAL_STATE.search_history_items
		})
	}
}
