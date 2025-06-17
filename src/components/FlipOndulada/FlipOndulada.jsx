import { useReducer } from "react";
import "./style.css";

export const FlipOndulada = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "component-2",
  });

  return (
    <div
      className={`flip-ondulada property-1-0-${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="back-side-ondulada">
        {state.property1 === "component-2" && (
          <img
            className="image-3"
            alt="Image"
            src="src\components\images\flipOndulada1.svg"
          />
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "component-1",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "component-2",
      };
  }

  return state;
}
