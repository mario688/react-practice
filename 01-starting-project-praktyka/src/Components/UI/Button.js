import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClickFunction}
      className={style.button}
      disabled={props.isOf}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
