import useFetch from "@/hooks/useFetch";
import { ItemListPreviewProps } from "@/types/types";
import Link from "next/link";
import ItemCard from "../item/ItemCard";

const ItemListPreview = (props: ItemListPreviewProps) => {
	const { data, isLoading } = useFetch(props.category, props.quantity);
	return (
		<div className="w-[100%] flex justify-center flex-col lg:p-0 p-[1rem]">
			<Link href={`/categories/${props.category}`}>
				<h2 className="md:ml-[5rem] sm:ml-2 lg:pt-[2rem] lg:pb-[1rem] py-[1rem] text-4xl text-purple-400 font-bold">
					{props.title}
				</h2>
			</Link>
			<div className="flex justify-center flex-wrap">
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
