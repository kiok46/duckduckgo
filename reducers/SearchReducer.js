import {
	LOAD_SEARCH_HISTORY_ITEMS
} from '../actions/types';

export const INITIAL_STATE = {
    search_history_items: [],
};

export default ( state=INITIAL_STATE, action ) => {
	switch (action.type) {
		case LOAD_SEARCH_HISTORY_ITEMS:
		    return {...state, search_history_items: action.payload};
		default:
			return state;

	}
};
