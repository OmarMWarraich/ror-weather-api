import { useState, useEffect } from "react";
import "./App.css";
import User from "./components/User";

const App = () => {
  const [currUser, setCurrUser] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setCurrUser(user);
    }
  }, []);
  return (
    <div className="App">
      <User currUser={currUser} setCurrUser={setCurrUser} />
    </div>
  );
};
export default App;
