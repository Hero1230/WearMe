import { Item } from "../types/types";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/index";
import { notifyErrorLoad } from "./Notifications";

export default async function fetchSingleProduct(id: string) {
  const docRef = doc(db, "products", id);
  try {
    const documentSnapshots = await getDoc(docRef);
    const data = documentSnapshots.data();
    const product = { ...data, id: documentSnapshots.id };
    return product as Item;
  } catch (error) {
    console.log(error);
    notifyErrorLoad();
    return null;
  }
}
