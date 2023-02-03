import Image from "next/image";
import { Item } from "@/types/types";
import { useDispatch } from "react-redux";
import {
	decreaseCartQuantity,
	increaseCartQuantity,
	removeFromCart,
} from "@/features/cart/CartSlice";
import useGetImageUrl from "@/hooks/useGetImageUrl";

const ItemCard = (props: Item) => {
	const imageUrl = useGetImageUrl(`images/${props.id}.webp`);
	const dispatch = useDispatch();
	const { title, price, quantity, id } = props;
	return (
		<div className="w-[100%] h-[10rem] flex justify-between items-center overflow-hidden">
			<div className="md:w-[30%] w-[60%]">
				<Image src={imageUrl} alt={title} width={260} height={200} />
			</div>
			<div className="h-[100%] md:text-3xl text-xl">
				<p>
					{title.substring(0, 15)}
					{title.length > 15 && "..."}
				</p>
			</div>
			<div className="flex-col sm:flex hidden">
				<button
					className="text-purple-700"
					onClick={() => dispatch(removeFromCart({ id }))}>
					Remove
				</button>
				<button className="text-purple-700">Add to the wishlist</button>
			</div>
			<div className="flex flex-col justify-center items-center gap-2">
				<div className="flex justify-center items-center">
					<button onClick={() => dispatch(decreaseCartQuantity({ id }))}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.5"
							stroke="#d8b4fe"
							className="w-7 h-7">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
						</svg>
					</button>
					<p>{quantity}</p>
					<button onClick={() => dispatch(increaseCartQuantity({ id }))}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.5"
							stroke="#d8b4fe"
							className="w-7 h-7">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</button>
				</div>
				<p className="text-3xl">{price}$</p>
			</div>
		</div>
	);
};

export default ItemCard;
