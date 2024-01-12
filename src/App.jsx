import SignIn from "./Components/Sign-in";
import SignUp from "./Components/SignUp";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "./firebase";
const auth = getAuth(app);
const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // you are logged in
        setUser(user);
        console.log("Login" + user);
      } else {
        // your are logged out
        console.log("Logged out");
        setUser(null);
      }
    });
  }, []);
  if (user === null) {
    return (
      <div>
        <SignUp />
        <SignIn />
      </div>
    );
  }

  return (
    <div>
      <h1>Your are login with {user.email}</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
};

export default App;
