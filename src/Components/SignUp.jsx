import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() =>
      alert("Success")
    );
  };
  return (
    <>
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
        <button onClick={createUser}>Create User </button>
      </div>
    </>
  );
};

export default SignUp;
