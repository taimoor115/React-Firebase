import { useState } from "react";
import { useFirebase } from "./Context/Firebase";
const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebase = useFirebase();
  console.log(firebase);

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
        <button
          onClick={() => {
            firebase.signUpWithEmailPassword(email, password);
            firebase.putData(`users/` + "taimoorHussain", { email, password });
          }}
        >
          Create User
        </button>
      </div>
    </>
  );
};

export default App;
