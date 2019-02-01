import { SET_AUTH } from '../constans/Login';

export function setAuth(isAuth) {
  return {
    type: SET_AUTH,
    payload: isAuth,
  }
}
