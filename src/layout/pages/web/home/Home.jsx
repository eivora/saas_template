import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AuthContext from '../../../../context/auth/authContext';

import Head from '../../shared/head/Head';

const Home = ({ className }) => {
  let navigate = useNavigate();
  const { state } = useLocation();
  const default_classnames = 'mx-auto items-center';
  const classProps = classnames(default_classnames, className);
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  const onSignIn = () => {
    navigate('/sign-in', { state });
  };
  const onGoToApp = () => {
    navigate('/app', { state });
  };

  return (
    <>
      <Head title="Saas template app" />
      <section className={classProps}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out">
                Make your website{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-l from-indigo-700 to-red-600">
                  wonderful
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150">
                  This is the saas template app. You can use it to quickly set up a project and
                  boost yourself in creating awesome Saas applications!
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300">
                  {isAuthenticated ? (
                    <button className="btn btn-secondary" onClick={onGoToApp}>
                      Go to app
                    </button>
                  ) : (
                    <button className="btn btn-primary" onClick={onSignIn}>
                      Sign in
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div>
              <div
                className="relative flex justify-center mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="450">
                <div className="flex flex-col justify-center" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Home.defaultProps = {
  className: ''
};

Home.propTypes = {
  className: PropTypes.string
};

export default Home;
