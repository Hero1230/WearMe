import { db } from "../firebase/index";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ProductFetch } from "@/types/types";

export default function useFetch(category: string, quantity: number) {
	const [data, setData] = useState<ProductFetch[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const q = query(
		collection(db, "products"),
		where("category", "array-contains-any", [category]),
		limit(quantity)
	);
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const documentSnapshots = await getDocs(q);
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
			setData(products);
			setIsLoading(false);
		};
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category]);
	return { data, isLoading };
}
