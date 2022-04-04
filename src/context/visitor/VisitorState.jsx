import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import VisitorContext from './visitorContext';
import visitorReducer from './visitorReducer';
import { SET_VISITOR, VISITOR_LOADING, SET_VISITOR_REDIRECT } from '../types';
//import { projectAnalytics } from '../../firebase/config';
//import * as languageMap from '../../constants/language.json';
import userLocale from '../../utils/getUserLocale';

const VisitorState = (props) => {
  const initialState = {
    visitor: JSON.parse(localStorage.getItem('visitor')),
    isVisitorLoading: false,
    visitorRedirectPath: ''
  };

  const [state, dispatch] = useReducer(visitorReducer, initialState);

  //Create visitor
  const createVisitor = async () => {
    const { locale, locale_language, locale_location, locale_currency } = userLocale;
    const visitor = {
      visitor_id: uuidv4(),
      theme: '',
      language: locale_language,
      location: locale_location,
      currency: locale_currency,
      locale: locale,
      cookies_consent: false
    };

    //projectAnalytics.setUserProperties({ visitor_id: newVisitor.visitor_id });
    //setVisitorLanguage(locale_language === 'sv' ? languageMap['sv'] : languageMap['en']);

    try {
      dispatch({
        type: SET_VISITOR,
        payload: visitor
      });
    } catch (err) {
      console.error('ERROR! in createVisitor');
    }
  };

  // Set visitor
  const setVisitor = async (visitor) => {
    try {
      dispatch({
        type: SET_VISITOR,
        payload: visitor
      });
    } catch (err) {
      console.error('ERROR! in setVisitor');
    }
  };

  //Set visitor loading
  const setVisitorLoading = () => dispatch({ type: VISITOR_LOADING, isVisitorLoading: true });

  const setVisitorRedirect = (pathname) =>
    dispatch({ type: SET_VISITOR_REDIRECT, payload: pathname });

  return (
    <VisitorContext.Provider
      value={{
        visitor: state.visitor,
        isVisitorLoading: state.isVisitorLoading,
        visitorRedirectPath: state.visitorRedirectPath,
        setVisitor,
        createVisitor,
        setVisitorLoading,
        setVisitorRedirect
      }}>
      {props.children}
    </VisitorContext.Provider>
  );
};

export default VisitorState;
