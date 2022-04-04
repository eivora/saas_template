import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AuthContext from '../../../../context/auth/authContext';

const AuthLoading = ({ className }) => {
  let navigate = useNavigate();

  const default_classnames = '';
  const classProps = classnames(default_classnames, className);
  const authContext = useContext(AuthContext);
  const { isAuthenticated, isAuthError } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/app', { replace: true });
    }
  }, [navigate, isAuthenticated]);

  useEffect(() => {
    if (isAuthError) {
      navigate('/sign-in', { replace: true });
      //or fallback for failed auth
    }
  }, [navigate, isAuthError]);

  return (
    <div className={classProps}>
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold animate-bounce">Loading...</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

AuthLoading.defaultProps = {
  className: '',
  children: ''
};

AuthLoading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export default AuthLoading;
