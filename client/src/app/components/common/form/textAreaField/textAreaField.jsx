import React from "react";
import PropTypes from "prop-types";
import "./textAreaField.scss";
const TextAreaField = ({ name, value, onChange, error }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const getInputClasses = () => {
    return "text-area-inp" + (error ? " is-invalid" : "");
  };

  return (
    <div className="mb-4">
      <div className="textAreaField">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
        />

        {error && <div className="invalid-feedback ">{error}</div>}
      </div>
    </div>
  );
};
TextAreaField.defaultProps = {
  type: "text",
};
TextAreaField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default TextAreaField;
