import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChanged,
    valueBlurHandler: nameBlured,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChanged,
    valueBlurHandler: emailBlured,
    reset: restEmailInput,
  } = useInput((value) => value.includes("@"));
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredName + " " + enteredEmail);
    resetNameInput();
    restEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChanged}
          onBlur={nameBlured}
        />
        {nameInputHasError && <p className="error-text">Name can't be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="Email">Your email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChanged}
          onBlur={emailBlured}
        />
        {emailInputHasError && (
          <p className="error-text">Email can't be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
