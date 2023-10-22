import React from "react";

function Name(props) {
  return (
    <div className="Name">
      <label htmlFor={props.name}>
        {props.text}
        <br />
        <input
          id={props.name}
          value={props.value}
          onChange={props.onChange}
          maxLength={props.max}
          onBlur={props.onBlur} // Add onBlur event handler
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          required
        />
      </label>
      {props.error && <span className="error-message">{props.error}</span>}
    </div>
  );
}

export default Name;
