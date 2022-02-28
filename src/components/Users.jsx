import React, { useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  return (
    <>
      <button onClick={getUsers}>Get Users</button>
      {users.length > 0 &&
        users.map((user) => (
          <h5 key={user.id}>{user.name}</h5>
        ))}
    </>
  );
}

export default Users;
