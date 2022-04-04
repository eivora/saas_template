import React, { useEffect, useContext } from 'react';
import { Router } from '../router/Router';
import VisitorContext from '../context/visitor/visitorContext';
import AuthContext from '../context/auth/authContext';
import CookieOverlay from '../layout/popups/cookie_overlay/CookieOverlay';

const Main = () => {
  const authContext = useContext(AuthContext);
  const visitorContext = useContext(VisitorContext);
  const { visitor } = visitorContext;
  const { getAuthStatus } = authContext;

  useEffect(() => {
    getAuthStatus();
  }, []);

  return (
    <main>
      {!visitor?.cookies_consent && <CookieOverlay />}
      <Router />
    </main>
  );
};

export default Main;
