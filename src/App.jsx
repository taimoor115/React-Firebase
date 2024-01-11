import { getDatabase, ref, set } from "firebase/database";
import app from "./firebase";

const db = getDatabase(app);

const App = () => {
  const putData = () => {
    set(ref(db, "users/taimoor"), {
      id: 1,
      name: "Taimoor Hussain",
      age: 21,
    });
  };
  return (
    <>
      <h1>Firebase</h1>
      <button onClick={putData}>Put Data</button>
    </>
  );
};

export default App;
