import React, { useState } from "react";
import Card from "./UI/Card";
import classes from "./UserForm.module.css";
import Button from "./UI/Button";
import styles from "./UI/Button.module.css";
import ErrorModal from "./UI/ErrorModal";

const UserForm = (props) => {
  //defining enetered values
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    //not to reload
    event.preventDefault();

    //check if strings empty
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title: 'Invalid',
        message: 'enter a value'
      });
      return;
    }
    //check if value=negative
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'enter a positive number'});
        return;
    }
    props.onClickAddUser(userData);

    //resetting values through useState so form will reload
    setEnteredName("");
    setEnteredAge("");
  };
  const errorHandler = () =>{
    setError(null);
  };

  //object to send to parent
  const userData = {
    userName: enteredName,
    Age: enteredAge,
  };

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className={classes.userForm__card}>
      <form onSubmit={submitHandler}>
        <label htmlFor="userName" className={classes.userForm__label}>
          Username
        </label>
        <input
          id="userName"
          type="text"
          onChange={nameChangeHandler}
          value={enteredName}
          className={classes.userForm__input}
        ></input>
        <label className={classes.userForm__label}>Age(Years)</label>
        <input
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
          className={classes.userForm__input}
        ></input>
        <Button className={styles.button} type="submit">
          Add User
        </Button>
      </form>
    </Card>
    </div>
  );
};

export default UserForm;
