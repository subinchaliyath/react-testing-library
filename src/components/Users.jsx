import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setLoading(false);
    setUsers(data);
  };

  return (
    <>
      <button onClick={getUsers}>Get Users</button>
      {loading && <h1>Loading...</h1>}
      {users.length > 0 &&
        users.map((user) => <h5 key={user.id}>{user.name}</h5>)}
    </>
  );
}

export default Users;
