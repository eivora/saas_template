import React, { lazy, Suspense, useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import VisitorContext from '../context/visitor/visitorContext';
import AuthContext from '../context/auth/authContext';
import AuthLoading from '../layout/pages/shared/auth_loading/AuthLoading';

import { track_init } from '../tracking';

const Loading = () => <p className="p-4 w-full text-center h-screen bg-red-500">Loading...</p>;

const Home = lazy(() => import('../layout/pages/web/home'));
const SignIn = lazy(() => import('../layout/pages/web/sign_in'));
const AppHome = lazy(() => import('../layout/pages/app/home'));

const Router = () => {
  const visitorContext = useContext(VisitorContext);
  const authContext = useContext(AuthContext);

  const { visitor, setVisitor, setVisitorLoading, createVisitor } = visitorContext;
  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (!visitor) {
      setVisitorLoading();
      //visitor object NOT exists in state
      if (JSON.parse(localStorage.getItem('visitor'))) {
        //visitor object exists in localStorage
        // -- copy to state
        setVisitor(JSON.parse(localStorage.getItem('visitor')));
      } else {
        //visitor object NOT exists in localStorage
        // -- create visitor object
        createVisitor();
      }
    }
  }, [visitor, setVisitor, setVisitorLoading, createVisitor]);

  useEffect(() => {
    if (visitor?.cookies_consent) {
      console.log('init tracking');
      track_init();
    }
  }, [visitor]);

  const PrivateOutlet = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/auth-loading" element={<AuthLoading />} />

          <Route path="/app" element={<PrivateOutlet />}>
            <Route path="" element={<AppHome />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export { Router };
