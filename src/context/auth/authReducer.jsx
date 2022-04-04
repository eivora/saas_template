import { AUTH_USER, AUTH_USER_LOADING, AUTH_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthUserLoading: false,
        authUser: action.authUser,
        isAuthenticated: action.authStatus
      };
    case AUTH_USER_LOADING:
      return {
        ...state,
        isAuthUserLoading: true
      };
    case AUTH_ERROR:
      return {
        ...state,
        authErrorId: action.id,
        authErrorMsg: action.msg,
        isAuthUserLoading: false
      };

    default:
      return state;
  }
};
