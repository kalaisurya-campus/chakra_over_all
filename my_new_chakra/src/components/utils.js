import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "@firebase/firestore";

import db from "../firebase";

export const handleclick = async () => {
  const name = prompt("Enter name:");
  const color = prompt("Enter Color");
  const collectionRef = collection(db, "colors");
  const payload = { name: name, value: color };
  await addDoc(collectionRef, payload);
};

export const handleEdit = async (id) => {
  const name = prompt("Enter name:");
  const color = prompt("Enter Color");
  const docRef = doc(db, "colors", id);
  const payload = { name: name, value: color };
  setDoc(docRef, payload);
};

export const handleDelete = async (id) => {
  const docRef = doc(db, "colors", id);
  alert("delete this message");
  await deleteDoc(docRef);
};
