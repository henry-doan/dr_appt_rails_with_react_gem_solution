import React from "react";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <a href="/users">Users</a>
      </li>
      <li>
        <a href="/users/new">New User</a>
      </li>
      <li>
        <a href="/doctors">Doctors</a>
      </li>
      <li>
        <a href="/doctors/new">New Doctor</a>
      </li>
    </ul>
  </nav>
)

export default Navbar;