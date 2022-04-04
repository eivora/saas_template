import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useDelayedRender = ({ delay }) => {
  const [delayed, setDelayed] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), delay);
    return () => clearTimeout(timeout);
  }, [delay]);
  return (fn) => !delayed && fn();
};

useDelayedRender.defaultProps = {
  delay: 1000,
  children: ''
};

useDelayedRender.propTypes = {
  delay: PropTypes.int,
  children: PropTypes.string
};

export default useDelayedRender;
