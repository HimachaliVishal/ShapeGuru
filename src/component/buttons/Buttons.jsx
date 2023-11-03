import React from "react";
import "./Buttons.scss";
import { createRipples } from "react-ripples";

const BorderButton = (props) => {
  const MyRipples = createRipples({
    color: "#b7c8ff",
    during: 1000,
  });

  return (
    <MyRipples>
      <button
        onClick={props.onClick}
        className={props.className ? props.className : "customBtn"}
      >
        {props.title} {props.icon}
      </button>
    </MyRipples>
  );
};

export default BorderButton;

export const Button2 = (props) => {
  const MyRipples1 = createRipples({
    color: "#d7ce1f",
    during: 1500,
  });

  return (
    <MyRipples1>
      <button
        onClick={props.onClick}
        className={props.className ? props.className : "Button2"}
      >
        {props.title} {props.icon}
      </button>
    </MyRipples1>
  );
};
