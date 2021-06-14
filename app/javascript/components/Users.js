import React from 'react';

const Users = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      <a href="/users/new">Add User</a>
      <br />
      <h2>{ users.length <= 0 ? "No Users" : "" }</h2> 
      { users.map((user) => (
        <div>
          <a href={`/users/${user.id}`}>{user.first_name} {user.last_name}</a>
        </div>
      ))}
    </>
  )
}

export default Users;