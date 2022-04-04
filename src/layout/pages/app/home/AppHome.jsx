import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AuthContext from '../../../../context/auth/authContext';

import Head from '../../shared/head';

const AppHome = ({ className }) => {
  const default_classnames = '';
  const classProps = classnames(default_classnames, className);

  const authContext = useContext(AuthContext);
  const { signOut, authUser } = authContext;

  const handleClick = () => {
    signOut(authUser);
  };

  return (
    <>
      <Head title="Saas template app - signed in" />

      <div className={classProps}>
        <div className="hero min-h-screen bg-base-200">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{`Hello there, ${authUser?.displayName}`}</h1>
              <p className="mb-5">
                Welcome to the saas sample app. Perfect for playground activities
              </p>
              <button className="btn btn-secondary" onClick={handleClick}>
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AppHome.defaultProps = {
  className: ''
};

AppHome.propTypes = {
  className: PropTypes.string
};

export default AppHome;
