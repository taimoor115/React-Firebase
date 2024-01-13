import {
  getFirestore,
  addDoc,
  collection,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import app from "./firebase";

const fireStore = getFirestore(app);

const App = () => {
  // Write data in Firestore
  const writeData = async () => {
    const result = await addDoc(collection(fireStore, "cities"), {
      name: "Lahore",
      pinCode: 1234,
      lat: 123,
      long: 12,
    });

    console.log("Result", result);
  };
  const writeSubData = async () => {
    const subResult = await addDoc(
      collection(fireStore, "cities/MISYTLoANWFIqtFsbxsK/places"),
      {
        place: "Harbans Pura",
        description: "Town",
        Date: Date.now(),
      }
    );
    console.log("Result", subResult);
  };

  // Read Data in Firestore

  const getDocument = async () => {
    const ref = doc(fireStore, "cities", "MISYTLoANWFIqtFsbxsK");
    const snap = await getDoc(ref);

    console.log("Result", snap.data());
  };

  // Query Data in Firestore
  const getDocumentsByQuery = async () => {
    const refCollection = collection(fireStore, "users");
    const q = query(refCollection, where("isMale", "==", true));

    const snapShot = await getDocs(q);

    snapShot.forEach((query) => console.log(query.data()));
  };

  // Update Data in Firestore
  const updateData = async () => {
    const docRef = doc(fireStore, "cities", "MISYTLoANWFIqtFsbxsK");
    await updateDoc(docRef, {
      name: "Karachi",
    });
  };

  return (
    <div>
      <button onClick={writeData}>Put Data</button>
      <button onClick={writeSubData}>Put SubData</button>
      <button onClick={getDocument}> Read Data</button>
      <button onClick={getDocumentsByQuery}> Read Data by Query</button>
      <button onClick={updateData}>Update City</button>
    </div>
  );
};

export default App;
