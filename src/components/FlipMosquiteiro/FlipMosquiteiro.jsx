/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import "./style.css";

export const FlipMosquiteiro = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "component-1",
  });

  return (
    <div
      className={`flip-mosquiteiro ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="overlap-group">
        {state.property1 === "component-2" && (
          <>
            <div className="back-mosquiteiro">
              <img
                className="image"
                alt="Image"
                src="https://c.animaapp.com/VEoDEv2v/img/image-12@2x.png"
              />
            </div>

            <div className="back-mosquiteiro-2" />
          </>
        )}

        {state.property1 === "component-1" && (
          <img
            className="img"
            alt="Image"
            src="https://c.animaapp.com/VEoDEv2v/img/image-13-1@2x.png"
          />
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_leave":
      return {
        ...state,
        property1: "component-1",
      };

    case "mouse_enter":
      return {
        ...state,
        property1: "component-2",
      };
  }

  return state;
}
