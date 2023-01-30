import { ProductFetch } from "@/types/types";
import {
	collection,
	getDocs,
	limit,
	orderBy,
	query,
	startAfter,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/index";

export default function useFetchData() {
	const [data, setData] = useState<ProductFetch[]>([]);
	const [lastVisible, setLastVisible] = useState<any>(null);
	const [count, setCount] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [isAllFetch, setIsAllFetch] = useState(false);
	const q =
		count === 0
			? query(collection(db, "products"), limit(1))
			: query(
					collection(db, "products"),
					orderBy("id"),
					startAfter(lastVisible),
					limit(1)
			  );
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const documentSnapshots = await getDocs(q);
			if (documentSnapshots.empty) {
				setIsAllFetch(true);
				setIsLoading(false);
				return;
			}
			const products = documentSnapshots.docs.map((product) => {
				const data = product.data();
				return {
					category: data.category,
					description: data.description,
					id: data.id,
					price: data.price,
					title: data.title,
				} as ProductFetch;
			});
			setData([...data, ...products]);
			setLastVisible(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
			setIsLoading(false);
		};
		if (!isAllFetch) {
			fetchData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [count]);
	return { data, setCount, isLoading, isAllFetch };
}
