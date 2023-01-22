import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    getDocs,
  } from "firebase/firestore";

 import { db } from "./firebaseDb";
  
  
  const collectionName = "list-url";
  
  export const saveWebsite = (newLink) =>
    addDoc(collection(db, collectionName), newLink);

    export const getWebsites = () => getDocs(collection(db, collectionName));

    export const deleteWebsite = (id) => deleteDoc(doc(db, collectionName, id));