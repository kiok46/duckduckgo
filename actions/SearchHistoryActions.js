import { AsyncStorage } from 'react-native';

import {
	LOAD_SEARCH_HISTORY_ITEMS,
	SEARCHING
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

export const Searching = (isSearching=false) => {
	if (isSearching !== null){
		if (isSearching === true) {
			return {
				type: SEARCHING,
				payload: true
			};
		}
		return {
			type: SEARCHING,
			payload: false
		};
	}
	return {
		type: SEARCHING,
		payload: INITIAL_STATE.is_searching
	};


}
