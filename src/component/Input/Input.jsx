import React from "react";
import "./Input.scss";

const Input = (props) => {
  return (
    <div className="inputRow">
      {
        props.label && <label>
        {props.label}
        <sup>{props.star}</sup>
      </label>
      }
      
      <div className="inputRow__withicon">
        <input
          type={props.type}
          name={props.name}
          className="form-control"
          placeholder={props.placeholder && props.placeholder}
        />
        <span>{props.icon && props.icon}</span>
      </div>
    </div>
  );
};

export default Input;

export const Textarea = (props) => {
  return (
    <div className="inputRow">
      <label>
        {props.label}
        <sup>{props.star}</sup>
      </label>
      <div className="inputRow__withicon">
        <textarea
          type={props.type}
          name={props.name}
          className="form-control txtearea"
          placeholder={props.placeholder && props.placeholder}
          rows={props.rows}
        />
        <span>{props.icon && props.icon}</span>
      </div>
    </div>
  );
};
