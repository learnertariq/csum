import React from "react";
import PropTypes from "prop-types";

function Input({ error, label, name, onChange, value, type }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {type === "file" ? (
        <input
          className="form-control"
          id={name}
          name={name}
          onChange={onChange}
          type={type}
        />
      ) : (
        <input
          className="form-control"
          id={name}
          name={name}
          onChange={onChange}
          type={type}
          value={value}
        />
      )}

      {error && <p className="error alert alert-danger">{error}</p>}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Input;
