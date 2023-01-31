import { ComponentItemProp } from "@/types/types";
import ItemCard from "../item/ItemCard";

const ItemsList = (props: ComponentItemProp) => {
	return (
		<div className="flex justify-center w-[100%] gap-2 flex-wrap">
			{props.items.map((item) => (
				<ItemCard
					key={item.id}
					title={item.title}
					description={item.description}
					price={item.price}
					id={item.id}
				/>
			))}
		</div>
	);
};

export default ItemsList;
