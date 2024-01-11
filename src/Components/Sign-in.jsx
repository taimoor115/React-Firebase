import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("success"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input
          required
          placeholder="Enter your Email here "
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          required
          placeholder="Enter your password here "
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
      </div>
      <div>
        <button onClick={login}>Login</button>
      </div>
    </>
  );
};

export default SignIn;
