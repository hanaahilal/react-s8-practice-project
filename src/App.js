import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import React, { useState } from "react";

const DummyUserArray = [
  {
    id:0,
    userName: "Max",
    Age: 31,
  },
  {
    id:1,
    userName: "Bob",
    Age: 32,
  },
  {
    id:2,
    userName: "John",
    Age: 21,
  },
];

function App() {
  const [users,setUsers] = useState(DummyUserArray);

  const AddUserToArrayHandler = (userAdded) => {
    setUsers((prevUsers) => {
      return [...prevUsers, {userAdded, id: Math.random().toString()}];
    });
  };


  return (
    <div className="App">
      <UserForm onClickAddUser={AddUserToArrayHandler}></UserForm>
      <UserList user={users}></UserList>
    </div>
  );
}

export default App;
