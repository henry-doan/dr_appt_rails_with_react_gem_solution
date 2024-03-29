import React from "react";

const UserEdit = ({ user }) => {
  const { first_name, last_name, errors, id, dob } = user;
  const defaultFirstName = first_name ? first_name : "";
  const defaultLastName = last_name ? last_name : "";
  const defaultDob = dob ? dob : "";
  return (
  <>
    <h1>Update Users</h1>
    { errors && errors }
    <form action={ "/users/" + id } method="post">
      <input type="hidden" name="_method" value="patch" />
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
      <button type="submit">Update</button>
    </form>
    </>
  );
}

export default UserEdit;