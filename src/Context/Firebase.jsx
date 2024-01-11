import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyAtAXQVCh6XYjgxG_O0aVDr_UxsT2mdHOs",
  authDomain: "fir-499fc.firebaseapp.com",
  projectId: "fir-499fc",
  storageBucket: "fir-499fc.appspot.com",
  messagingSenderId: "722387737203",
  appId: "1:722387737203:web:ed4bfb03edbfd522a92806",
  databaseURL: "https://fir-499fc-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = (props) => {
  const signUpWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => set(ref(database, key), data);

  return (
    <FirebaseContext.Provider value={{ signUpWithEmailPassword, putData }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
