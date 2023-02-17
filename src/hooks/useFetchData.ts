import { ProductFetch } from "../types/types";
import { collection, getDocs, limit, query, startAfter, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/index";

export default function useFetchData(category: string) {
  const [data, setData] = useState<ProductFetch[]>([]);
  const [lastVisible, setLastVisible] = useState<any>(null);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isAllFetched, setIsAllFetched] = useState(false);
  const q =
    count === 0
      ? query(
          collection(db, "products"),
          where("category", "array-contains-any", [category]),
          limit(6)
        )
      : query(
          collection(db, "products"),
          startAfter(lastVisible),
          where("category", "array-contains-any", [category]),
          limit(6)
        );
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const documentSnapshots = await getDocs(q);
      if (documentSnapshots.empty) {
        setIsAllFetched(true);
        setIsLoading(false);
        return;
      }
      const products = documentSnapshots.docs.map((product) => {
        const data = product.data();
        return {
          category: data.category,
          description: data.description,
          id: product.id,
          price: data.price,
          title: data.title,
        } as ProductFetch;
      });
      setData([...data, ...products]);
      setLastVisible(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
      setIsLoading(false);
    };
    if (!isAllFetched) {
      fetchData();
    }
  }, [count]);
  return { data, setCount, isLoading, isAllFetched };
}
