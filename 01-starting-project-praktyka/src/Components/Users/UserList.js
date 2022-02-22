import style from "./UserList.module.css";
import User from "./User";
const UserList = (props) => {
  return (
    <div className={style.UsersList}>
      {props.users.map((user) => (
        <User name={user.name} age={user.age} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
