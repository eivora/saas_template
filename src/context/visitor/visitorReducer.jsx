import { SET_VISITOR, VISITOR_LOADING, SET_VISITOR_REDIRECT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_VISITOR:
      window.localStorage.setItem('visitor', JSON.stringify(action.payload));
      return {
        ...state,
        isVisitorLoading: false,
        visitor: action.payload
      };
    case VISITOR_LOADING:
      return {
        ...state,
        isVisitorLoading: action.isVisitorLoading
      };

    case SET_VISITOR_REDIRECT:
      return {
        ...state,
        visitorRedirectPath: action.payload
      };

    default:
      return state;
  }
};
