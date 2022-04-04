import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import AuthContext from '../../../../context/auth/authContext';

import Head from '../../shared/head/Head';

const SignIn = ({ className }) => {
  let navigate = useNavigate();
  //const { state } = useLocation();
  const default_classnames = '';
  const classProps = classnames(default_classnames, className);
  const authContext = useContext(AuthContext);
  const { signInWithGoogle } = authContext;

  const onSignInWithGoogle = () => {
    navigate('/auth-loading', { replace: true });
    signInWithGoogle();
  };

  return (
    <>
      <Head title="Sign in to the app" />
      <div className={classProps}>
        <div className="hero min-h-screen bg-base-200">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Sign in</h1>
              <p className="mb-5">
                Here are the different alternatives that can be used to authenticate
              </p>
              <button className="btn btn-primary" onClick={onSignInWithGoogle}>
                Sign in with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SignIn.defaultProps = {
  className: '',
  children: ''
};

SignIn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export default SignIn;
