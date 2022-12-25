import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as LogoEye } from "../../../../assets/svg/eye.svg";
import { ReactComponent as LogoEyeSlash } from "../../../../assets/svg/eyeslash.svg";
import "./textField.scss";
import classNames from "classnames";
const TextField = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder,
  className,
  inputClassName,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const inputClasses = classNames("form-control", inputClassName);
  const getInputClasses = () => {
    return inputClasses + (error ? " is-invalid" : "");
  };
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const classes = classNames("textfield", className);

  return (
    <div className={classes}>
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <div className="input__container">
          <input
            type={showPassword ? "text" : type}
            id={name}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
            className={
              type !== "password"
                ? getInputClasses()
                : `${getInputClasses()} input_right-border`
            }
          />
          {type === "password" && (
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <LogoEyeSlash className="logo__eye" />
              ) : (
                <LogoEye className="logo__eye" />
              )}
            </button>
          )}
        </div>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};
TextField.defaultProps = {
  type: "text",
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default TextField;
