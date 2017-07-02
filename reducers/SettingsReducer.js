import {
	AUTOCOMPLETE_SETTING,
	QUACK_ON_REFRESH_SETTING,
	SAVE_RECENT_SETTING,
	CHANGE_DEFAULT_TAB
} from '../actions/types';

export const INITIAL_STATE = {
    autocomplete: false,
	quack_on_refresh: false,
	save_recent: false,
	default_tab: "Stories (Default)"
};

export default ( state=INITIAL_STATE, action ) => {
	switch (action.type) {
		case AUTOCOMPLETE_SETTING:
		    return {...state, autocomplete: action.payload};
		case QUACK_ON_REFRESH_SETTING:
		    return {...state, quack_on_refresh: action.payload};
		case SAVE_RECENT_SETTING:
		    return {...state, save_recent: action.payload};
		case CHANGE_DEFAULT_TAB:
			return { ...state, default_tab: action.payload };
		default:
			return state;

	}
};
