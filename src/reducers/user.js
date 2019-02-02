import { SET_AUTH } from '../constans/Login';

export const initialState = {
	isAuth: localStorage.getItem('isAuth')
};

export function userReducer(state = initialState, action) {
	switch (action.type) {
    case SET_AUTH:
      localStorage.setItem('isAuth', true);
			return { ...state, isAuth: action.payload};
		default:
			return state;
	}
}
