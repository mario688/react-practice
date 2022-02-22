import style from "./User.module.css";
const User = (props) => {
  return (
    <div>
      <div className={style.user}>
        {`${props.name}(${props.age} years old)`}
      </div>
    </div>
  );
};
export default User;
