import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../firebase/index";

interface ProductFetch {
	category: string;
	description: string;
	id: string;
	price: number;
	title: string;
}

export default async function fetchData(
	category: string,
	quantity: number
): Promise<{ data: ProductFetch[]; isLoading: boolean }> {
	let data: ProductFetch[] = [];
	let isLoading = true;
	const q = query(
		collection(db, "products"),
		where("category", "==", category),
		limit(quantity)
	);

	const documentSnapshots = await getDocs(q);
	data = documentSnapshots.docs.map((product) => {
		const data = product.data();
		return {
			category: data.category,
			description: data.description,
			id: data.id,
			price: data.price,
			title: data.title,
		} as ProductFetch;
	});
	isLoading = false;
	return { data, isLoading };
}
