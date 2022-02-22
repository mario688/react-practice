import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Error from "../ErrorComponents/Error";
import style from "./AddUser.module.css";
const AddUser = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [typeOfErrorInvalid, setTypeOfErrorInvalid] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    setIsValid(true);
    const newUser = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setTypeOfErrorInvalid("emptyinputs");
      setIsValid(false);
      return;
    }
    if (parseInt(enteredAge) < 0) {
      setIsValid(false);
      setTypeOfErrorInvalid("tolowage");
    }

    props.onSaveUser(newUser);
    setEnteredAge("");
    setEnteredName("");
  };
  const saveNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const saveAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const closeErrorInput = () => {
    setIsValid(true);
  };

  return (
    <div>
      <Card>
        {!isValid ? (
          <Error onButtonIsValid={closeErrorInput} type={typeOfErrorInvalid} />
        ) : null}
        <form
          onSubmit={submitHandler}
          className={!isValid ? style.invalid : null}
        >
          <label>Name</label>
          <input value={enteredName} onChange={saveNameHandler} type="text" />
          <label>Age</label>
          <input value={enteredAge} onChange={saveAgeHandler} type="number" />
          <Button isOf={!isValid} type="submit">
            Add New User
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
