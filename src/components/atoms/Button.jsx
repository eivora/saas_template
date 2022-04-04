import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({ className, children }) => {
  const default_classnames = "";
  const classProps = classnames(default_classnames, className);

  return <div className={classProps}>{children}</div>;
};

Button.defaultProps = {
  className: "",
  children: ""
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export default Button;
