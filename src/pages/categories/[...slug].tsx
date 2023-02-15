/* eslint-disable react-hooks/rules-of-hooks */
import useFetchData from "../../hooks/useFetchData";
import ItemsList from "@/components/item-list/ItemsList";
import { useRouter } from "next/router";
import Loader from "@/components/loader/Loader";
import NoProductsFound from "@/components/no-products-found/NoProductsFound";
import Head from "next/head";

const FilteredProducts = () => {
	const router = useRouter();
	if (!router.query.slug) {
		return;
	}

	const query = router.query.slug[0];
	const { data, isLoading, setCount, isAllFetch } = useFetchData(query);

	if (!data || (data.length === 0 && !isLoading)) {
		return <NoProductsFound />;
	}

	return (
		<div className="flex flex-col items-center">
			<Head>
				<title>WearMe - {query}</title>
			</Head>
			<ItemsList items={data} />
			{isLoading && <Loader />}
			{!isAllFetch && !isLoading && (
				<button
					className="text-xl border-purple-500 border-2 lg:w-[10%] w-[40%] p-2 m-[1rem] rounded-md text-purple-500 hover:text-white hover:bg-purple-500"
					onClick={() => setCount((prev) => prev + 1)}>
					Load More
				</button>
			)}
		</div>
	);
};

export default FilteredProducts;
