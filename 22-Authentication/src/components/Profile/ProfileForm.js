import classes from "./ProfileForm.module.css";
import { useRef } from "react";
import { useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../store/auth-context";
const ProfileForm = () => {
  const history = useHistory();
  const newPassRef = useRef();
  const AuthCtx = useContext(AuthContext);
  const token = AuthCtx.token;
  const resetPassHandler = (e) => {
    e.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCiO66crw69K6rnAWqzr9fme5BgkTD1k0U",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: newPassRef.current.value,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((resp) => {
      history.replace("/");
    });
  };
  return (
    <form onSubmit={resetPassHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={newPassRef} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
