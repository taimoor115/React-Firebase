import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider(auth);

const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
}

const Google = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign with Google</button>
    </div>
  );
};

export default Google;
