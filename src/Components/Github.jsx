import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase";
const auth = getAuth(app);
const provider = new GithubAuthProvider(auth);

const signUpWithGitHub = () => {
  signInWithPopup(auth, provider);
};
const Github = () => {
  return (
    <div>
      <button onClick={signUpWithGitHub}>Sign up with Github</button>
    </div>
  );
};

export default Github;
