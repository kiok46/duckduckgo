import {
	TOGGLE_FAVOURITES_SEARCH_TAB,
	TOGGLE_FAVOURITES_STORIES_TAB,
	CHANGE_FAVOURITES_TAB_COLOR
} from './types';

import Colors from '../constants/Colors';
import { INITIAL_STATE } from '../reducers/HistoryReducer';


export const toggleFavouritesSearchTab = (activate) => {
	if (activate !== null){
		return {
			type: TOGGLE_FAVOURITES_SEARCH_TAB,
			payload: activate
		};
	}
	return {
		type: TOGGLE_FAVOURITES_SEARCH_TAB,
		payload: INITIAL_STATE.searchTabOpen
	};
}

export const toggleFavouritesStoriesTab = (activate) => {
	if (activate !== null){
		return {
			type: TOGGLE_FAVOURITES_STORIES_TAB,
			payload: activate
		}
	}
	return {
		type: TOGGLE_FAVOURITES_STORIES_TAB,
		payload: INITIAL_STATE.storiesTabOpen
	};
}

export const changeFavouritesTabColor = (idx, searchTabOpen, storiesTabOpen) => {
	if (idx === 0){
		if (searchTabOpen){
			return {
				type: CHANGE_FAVOURITES_TAB_COLOR,
				payload: 'white'
			}
		}
		return {
			type: CHANGE_FAVOURITES_TAB_COLOR,
			payload: Colors.tintColor
		}

	} else {
		if (storiesTabOpen){
			return {
				type: CHANGE_FAVOURITES_TAB_COLOR,
				payload: 'white'
			}
		}
		return {
			type: CHANGE_FAVOURITES_TAB_COLOR,
			payload: Colors.tintColor
		}
	}
}
