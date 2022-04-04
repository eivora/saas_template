import { HelmetProvider } from 'react-helmet-async';
import { setupFirebase } from '../lib/firebase';
import React from 'react';

import Main from './Main';
import AuthState from '../context/auth/AuthState';
import './../App.css';
import VisitorState from '../context/visitor/VisitorState';

//init firebase modules
setupFirebase();

const App = () => {
  return (
    <HelmetProvider>
      <VisitorState>
        <AuthState>
          <Main />
        </AuthState>
      </VisitorState>
    </HelmetProvider>
  );
};

export default App;
