import { SET_AUTH } from '../constans/Login';

export const initialState = {
	user: {
		isAuth: false
	}
};

export function rootReducer(state = initialState, action) {
	switch (action.type) {
		case SET_AUTH:
			return {...state, isAuth: action.payload };
		default:
			return state;
	}
}
