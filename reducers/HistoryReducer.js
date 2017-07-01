import {
	TOGGLE_HISTORY_SEARCH_TAB,
	TOGGLE_HISTORY_STORIES_TAB,
	CHANGE_HISTORY_TAB_COLOR
} from '../actions/types';

export const INITIAL_STATE = {
	searchTabOpen: true,
	storiesTabOpen: false,
	tabColor: 'white'
};

export default ( state=INITIAL_STATE, action ) => {
	switch (action.type) {
		case TOGGLE_HISTORY_SEARCH_TAB:
		    return { ...state, searchTabOpen: action.payload, storiesTabOpen: !action.payload};
		case TOGGLE_HISTORY_STORIES_TAB:
		    return { ...state, storiesTabOpen: action.payload, searchTabOpen: !action.payload }
		case CHANGE_HISTORY_TAB_COLOR:
			return { ...state, tabColor: action.payload }
		default:
			return state;

	}
};
