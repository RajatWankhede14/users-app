import axios from "axios";
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-center text-3xl font-bold">Users List</h1>
      <div className="grid sm:mx-auto sm:grid-cols-2 sm:gap-x-16">
        {users.map((user) => (
          <UserCard
            name={user.name}
            email={user.email}
            phone={user.phone}
            website={user.website}
            users={users}
            setUsers={setUsers}
          />
        ))}
      </div>
    </div>
  );
}

export default Users;
