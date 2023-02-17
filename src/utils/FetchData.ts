import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../firebase/index";
import { ProductFetch } from "../types/types";

export default async function fetchData(
  category: string,
  quantity: number
): Promise<ProductFetch[]> {
  const data: ProductFetch[] = [];
  const q = query(
    collection(db, "products"),
    where("category", "array-contains-any", [category]),
    limit(quantity)
  );

  const documentSnapshots = await getDocs(q);
  documentSnapshots.docs.forEach((doc) => {
    const product = doc.data();
    data.push({
      category: product.category,
      description: product.description,
      price: product.price,
      id: doc.id,
      title: product.title,
    });
  });
  return data;
}
