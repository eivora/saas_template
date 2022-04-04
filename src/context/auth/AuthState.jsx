import React, { useReducer } from 'react';
import { onAuthStateChanged, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

import AuthContext from './authContext';
import authReducer from './authReducer';

import { AUTH_USER, AUTH_USER_LOADING, AUTH_ERROR } from '../types';
import { useAuth } from '../../lib/firebase';

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: false,
    isAuthUserLoading: false,
    isAuthError: false,
    authUser: {}
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  //Set AuthUser
  const setAuthUser = (authUser, authStatus) => {
    dispatch({
      type: AUTH_USER,
      authUser: authUser,
      authStatus: authStatus
    });
  };

  //Get Auth status
  const getAuthStatus = () => {
    const auth = useAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        signIn(user);
      } else {
        signOut();
      }
    });
  };

  //Sign in
  const signIn = (authUser) => {
    setAuthUserLoading();
    setAuthUser(authUser, true);
  };

  //Sign out
  const signOut = (authUser) => {
    authUser?.auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        setAuthUser({}, false);
      })
      .catch((error) => {
        console.error(error);
        // An error happened.
        setAuthError('some error id', 'some error message');
        setTimeout(() => {
          setAuthError(null, null);
        }, 5000);
      });
  };

  //Sign in with Google
  const signInWithGoogle = () => {
    const auth = useAuth();

    const provider = new GoogleAuthProvider();
    // @see https://firebase.google.com/docs/auth/web/google-signin
    //use visitor language code
    //auth.languageCode = 'sv';
    signInWithRedirect(auth, provider)
      .then((result) => {
        signIn(result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //Set Auth User Loading
  const setAuthUserLoading = () => dispatch({ type: AUTH_USER_LOADING });

  //Set Auth Error
  const setAuthError = ({ id, msg }) => dispatch({ type: AUTH_ERROR, id: id, msg: msg });

  return (
    <AuthContext.Provider
      value={{
        authUser: state.authUser,
        isAuthenticated: state.isAuthenticated,
        isAuthUserLoading: state.isAuthUserLoading,
        isAuthError: state.isAuthError,
        getAuthStatus,
        signIn,
        signOut,
        signInWithGoogle
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
