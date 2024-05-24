import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import Locations from "./Locations";

import { useState } from "react";
const User = ({ currUser, setCurrUser }) => {
  const [show, setShow] = useState(true);

  if (currUser) {
    let name = currUser.email.split("@")[0];
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <div>
        Hello <b>{name}</b>
        <Locations />
        <Logout setCurrUser={setCurrUser} />
      </div>
    );
  }
  return (
    <div>
      {show ? (
        <Login setCurrUser={setCurrUser} setShow={setShow} />
      ) : (
        <Signup setCurrUser={setCurrUser} setShow={setShow} />
      )}
    </div>
  );
};
export default User;
