import ItemCard from "../item/ItemCard";

const items = [
	{
		id: "i1",
		title: "Nike Jordan",
		description:
			"If you are looking for a modern sneaker that is easy to style, or are you just looking for a shoe for the coming summer, then this sneaker is just for you!",
		price: 200,
	},
	{
		id: "i2",
		title: "Nike Jordan",
		description:
			"If you are looking for a modern sneaker that is easy to style, or are you just looking for a shoe for the coming summer, then this sneaker is just for you!",
		price: 200,
	},
	{
		id: "i3",
		title: "Nike Jordan",
		description:
			"If you are looking for a modern sneaker that is easy to style, or are you just looking for a shoe for the coming summer, then this sneaker is just for you!",
		price: 200,
	},
	{
		id: "i4",
		title: "Nike Jordan",
		description:
			"If you are looking for a modern sneaker that is easy to style, or are you just looking for a shoe for the coming summer, then this sneaker is just for you!",
		price: 200,
	},
	{
		id: "i5",
		title: "Nike Jordan",
		description:
			"If you are looking for a modern sneaker that is easy to style, or are you just looking for a shoe for the coming summer, then this sneaker is just for you!",
		price: 200,
	},
	{
		id: "i6",
		title: "Nike Jordan",
		description:
			"If you are looking for a modern sneaker that is easy to style, or are you just looking for a shoe for the coming summer, then this sneaker is just for you!",
		price: 200,
	},
];

const ItemsList = () => {
	return (
		<div className="flex justify-center w-[100%] gap-2 flex-wrap">
			{items.map((item) => (
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
