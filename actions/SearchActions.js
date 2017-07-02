import { AsyncStorage } from 'react-native';

import {
	LOAD_SEARCH_HISTORY_ITEMS,
	SEARCHING,
	CHANGE_SEARCH_TEXT
} from './types';

import { INITIAL_STATE } from '../reducers/SearchReducer';


export const changeSearchText = (search="") => {
	if (search !== null){
		return {
			type: CHANGE_SEARCH_TEXT,
			payload: search
		};
	}
	return {
		type: CHANGE_SEARCH_TEXT,
		payload: INITIAL_STATE.search_text
	};
}


export const getSearchHistory = () => async dispatch => {

	let search_history_items = await AsyncStorage.getItem('search_history_items');
	search_history_items = JSON.parse(search_history_items)

	if ( search_history_items !== null ) {
		  await AsyncStorage.setItem('search_history_items', JSON.stringify(search_history_items));
		  dispatch({
	        type: LOAD_SEARCH_HISTORY_ITEMS,
			payload: search_history_items
		  })
	} else {
		await AsyncStorage.setItem('search_history_items', JSON.stringify(INITIAL_STATE.search_history_items));
		dispatch({
			type: LOAD_SEARCH_HISTORY_ITEMS,
			payload: INITIAL_STATE.search_history_items
		})
	}
}

export const storeSearchQuery = (searchQuery="") => async dispatch => {

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
