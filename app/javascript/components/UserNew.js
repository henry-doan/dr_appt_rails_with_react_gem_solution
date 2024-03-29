import React from "react";

const UserNew = ({ user }) => {
  const { first_name, last_name, dob, errors } = user;
  const defaultFirstName = first_name ? first_name : "";
  const defaultLastName = last_name ? last_name : "";
  const defaultDob = dob ? dob : "";
  return (
  <>
    <h1>New User</h1>
    { errors && errors }
    <form action="/users" method="post">
      <input
        placeholder="First Name"
        type="text"
        defaultValue={defaultFirstName}
        name="user[first_name]"
      />
      <input
        placeholder="Last Name"
        type="text"
        defaultValue={defaultLastName}
        name="user[last_name]"
      />
      <input
        placeholder="DOB"
        type="text"
        defaultValue={defaultDob}
        name="user[dob]"
      />
      <button type="submit">Add</button>
    </form>
    </>
  );
}

export default UserNew;