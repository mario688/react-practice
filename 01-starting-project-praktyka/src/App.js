import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";
function App() {
  let usersArray = [
    { id: "u1", name: "Mario", age: 30 },
    { id: "u2", name: "Maja", age: 32 },
  ];
  const [enteredUsers, setEnteredUser] = useState(usersArray);

  const onSaveUser = (savedUser) => {
    setEnteredUser((prevUsers) => {
      return [savedUser, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onSaveUser={onSaveUser} />
      <div>
        <UserList users={enteredUsers} />
      </div>
    </div>
  );
}

export default App;
