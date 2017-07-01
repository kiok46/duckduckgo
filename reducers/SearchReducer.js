import {
	LOAD_SEARCH_HISTORY_ITEMS,
	SEARCHING
} from '../actions/types';

export const INITIAL_STATE = {
    search_history_items: [],
	is_searching: false
};

export default ( state=INITIAL_STATE, action ) => {
	switch (action.type) {
		case LOAD_SEARCH_HISTORY_ITEMS:
		    return { ...state, search_history_items: action.payload};
		case SEARCHING:
		    return { ...state, is_searching: action.payload }
		default:
			return state;

	}
};
