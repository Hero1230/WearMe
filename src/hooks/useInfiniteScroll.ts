import { useState, useEffect } from "react";
// import db from "firebase/firestore";

// interface Item {
// 	id: string;
// 	name: string;
// 	// other properties
// }

// interface UseInfiniteScroll {
// 	data: Item[];
// }

// function useInfiniteScroll(collectionName: string): UseInfiniteScroll {
// 	const [data, setData] = useState<Item[]>([]);
// 	const [lastVisible, setLastVisible] =
// 		useState<firestore.QueryDocumentSnapshot<firestore.DocumentData> | null>(
// 			null
// 		);
// 	const limit = 10;

// 	useEffect(() => {
// 		getData();
// 		// Add scroll event listener
// 		window.addEventListener("scroll", handleScroll);
// 		return () => {
// 			// Remove scroll event listener
// 			window.removeEventListener("scroll", handleScroll);
// 		};
// 	}, []);

// 	function handleScroll() {
// 		if (
// 			window.innerHeight + document.documentElement.scrollTop ===
// 			document.documentElement.offsetHeight
// 		) {
// 			getData();
// 		}
// 	}

// 	function getData() {
// 		let query = db
// 			.collection(collectionName)
// 			.orderBy("timestamp", "desc")
// 			.limit(limit);

// 		if (lastVisible) {
// 			query = query.startAfter(lastVisible);
// 		}

// 		query.get().then((querySnapshot) => {
// 			let newData = querySnapshot.docs.map((doc) => ({
// 				...doc.data(),
// 				id: doc.id,
// 			}));
// 			setData([...data, ...newData]);
// 			setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
// 		});
// 	}

// 	return { data };
// }
