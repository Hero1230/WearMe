import { increaseCartQuantity } from "@/features/cart/CartSlice";
import { Item } from "@/types/types";
import Image from "next/image";
import { useDispatch } from "react-redux";

const ItemCard = (props: Item) => {
	const dispatch = useDispatch();
	const { title, description, price } = props;
	return (
		<div className="lg:w-[40%] sm:w-[90%] md:h-[20rem] xl:w-[30%] flex justify-between align-middle rounded-md overflow-hidden">
			<div className="w-[100%]">
				<Image
					src="/1_de42db09-7b2a-4f7f-bfea-aad7f9215783_1500x5000_crop_center.webp"
					alt={title}
					width={240}
					height={160}
					className="object-cover"
				/>
			</div>
			<div className="p-5">
				<h2 className="text-3xl">{title.toLocaleUpperCase()}</h2>
				<p className="py-2 text-3xl text-purple-500">${price}</p>
				<p className="py-3">{description.substring(0, 60)}...</p>
				<div className="pt-2 flex flex-row gap-1">
					<button
						className="bg-purple-500 p-2 rounded text-red-50"
						onClick={() =>
							dispatch(increaseCartQuantity({ ...props, quantity: 1 }))
						}>
						ADD TO CART
					</button>
					<button className="flex justify-center items-center bg-purple-500 rounded w-10">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="#ffff"
							className="w-6 h-6">
							<path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
