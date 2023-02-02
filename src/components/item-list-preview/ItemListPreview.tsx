import useFetch from "@/hooks/useFetch";
import { ItemListPreviewProps } from "@/types/types";
import Link from "next/link";
import ItemCard from "../item/ItemCard";
import Loader from "../loader/Loader";

const ItemListPreview = (props: ItemListPreviewProps) => {
	const { data, isLoading } = useFetch(props.category, props.quantity);
	return (
		<div className="w-[100%] flex justify-center flex-col lg:p-0 p-[1rem]">
			<Link
				href={`/categories/${props.category}`}
				className=" md:mx-[5rem] sm:ml-2 py-[1rem]">
				<h2 className=" lg:pt-[2rem] pb-[1rem] text-4xl text-purple-400 font-bold">
					{props.title}
				</h2>
				<div className="h-[0.1rem] rounded-lg bg-purple-500 opacity-40"></div>
			</Link>
			<div className="flex justify-center flex-wrap">
				{isLoading && <Loader />}
				{data.map((item) => (
					<ItemCard
						key={item.id}
						title={item.title}
						description={item.description}
						price={item.price}
						id={item.id}
					/>
				))}
			</div>
		</div>
	);
};

export default ItemListPreview;
