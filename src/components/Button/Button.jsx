import "./Button.css";

function Button(props) {
  return (
    <button
      className={
        props.type === "primary" ? "button-primary" : "button-secondary"
      }
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
