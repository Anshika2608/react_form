import React from "react";
import ReactDOM from "react-dom";
function Name(props) {
  return (
    <div className="Name">
      <label htmlFor={props.name}>
        {/* Enter your name:{" "} */}
        {props.text}<br/>
        <input
          id={props.name}
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          required
        />
      </label>
    </div>
  );
}
export default Name;