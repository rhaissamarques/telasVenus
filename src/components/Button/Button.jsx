import "./style.css";

export const Button = ({
  text = "Button",
  className,
  divClassName,
  onClick = () => {},
}) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      <div className={`text-wrapper ${divClassName}`}>{text}</div>
    </button>
  );
};