import React from "react";
import Card from "./UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.userList__card}>
      <ul>
        {props.user.map((user) => (
          <li  key={user.id} className={classes.listValues}>
            {user.userName} ({user.Age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
