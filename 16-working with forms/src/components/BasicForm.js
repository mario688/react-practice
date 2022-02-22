import useInput from "../hooks/use-inputField";
const BasicForm = (props) => {
  let formIsValid = false;

  const {
    value: nameValue,
    isTouched: nameIsTouched,
    isValid: nameIsValid,
    valueChangeHandler: nameChange,
    blurHandler: nameBlur,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lastNameValue,
    isTouched: lastNameIsTouched,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChange,
    blurHandler: lastNameBlur,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: emailValue,
    isTouched: emailIsTouched,
    isValid: emailIsValid,
    valueChangeHandler: emailChange,
    blurHandler: emailBlur,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));
  if (nameIsValid && lastNameValue && emailIsValid) {
    formIsValid = true;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetName();
    resetLastName();
    resetEmail();
    console.log(nameValue + " " + lastNameValue);
  };

  let classesName = !nameIsValid && nameIsTouched ? "invalid" : "";
  let classesLastName = !lastNameIsValid && lastNameIsTouched ? "invalid" : "";
  let classesEmail = !emailIsValid && emailIsTouched ? "invalid" : "";
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={`form-control ${classesName}`}>
          <label htmlFor="name">First Name</label>

          <input
            value={nameValue}
            onChange={nameChange}
            onBlur={nameBlur}
            type="text"
            id="name"
          />
          {!nameIsValid && nameIsTouched && <p>Name cant be empty!</p>}
        </div>
        <div className={`form-control ${classesLastName}`}>
          <label htmlFor="name">Last Name</label>
          <input
            value={lastNameValue}
            onChange={lastNameChange}
            onBlur={lastNameBlur}
            type="text"
            id="name"
          />
          {!lastNameValue && lastNameIsTouched && (
            <p>Last Name cant be empty</p>
          )}
        </div>
      </div>
      <div className={`form-control ${classesEmail}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={emailValue}
          onChange={emailChange}
          onBlur={emailBlur}
          type="text"
          id="name"
        />
        {!emailIsValid && emailIsTouched && (
          <p>Email cannot be empty and include @</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
