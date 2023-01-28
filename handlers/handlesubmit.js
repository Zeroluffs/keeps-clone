import {
  addDoc,
  collection,
  setDoc,
  doc,
  Timestamp,
} from "@firebase/firestore";
import { db } from "../firebase";

export const handleSubmit = async (testdata) => {
  const ref = collection(db, "test_data"); // Firebase creates this automatically

  let data = {
    testData: testdata,
  };
  //   const docData = {
  //     stringExample: "Hello world!",
  //     booleanExample: true,
  //     numberExample: 3.14159265,
  //     arrayExample: [5, true, "hello"],
  //     nullExample: null,
  //     objectExample: {
  //       a: 5,
  //       b: {
  //         nested: "foo",
  //       },
  //     },
  //   };
  //   await setDoc(doc(fireStore, "data", "one"), docData);
  try {
    await addDoc(collection(db, "tasks"), {
      title: "dsfdfs",
      description: "dsffd",
      completed: false,
      created: Timestamp.now(),
    });
  } catch (err) {
    alert(err);
  }

  // try {
  //   console.log("Adding data to firestore...");
  //   console.log(ref);
  //   console.log(data)
  //   const response = await setDoc(ref, data);
  //   console.log(response);
  // } catch (err) {
  //   console.log(err);
  // }
};
