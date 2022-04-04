import React from 'react';
import { Helmet } from 'react-helmet-async';

import PropTypes from 'prop-types';

const SERVICE_NAME = import.meta.env.VITE_SERVICE_NAME;

const Head = ({ title, description }) => {
  return (
    <Helmet>
      <title>{`${title} | ${SERVICE_NAME}`}</title>
      <meta name="description" content={description ?? `This is ${SERVICE_NAME}`} />
      <meta property="og:title" content={`${title} | ${SERVICE_NAME}`} />
      <meta property="og:description" content={description ?? `This is ${SERVICE_NAME}`} />
      <meta name="robots" content="noindex" />
    </Helmet>
  );
};

Head.defaultProps = {
  title: '',
  description: ''
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Head;
