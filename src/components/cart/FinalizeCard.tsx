import { CartState } from "@/types/types";
import { getTotalAmount } from "@/utils/Helpers";
import { useSelector } from "react-redux";

const FinalizeCard = () => {
	const items = useSelector((state: CartState) => state.cart.items);

	return (
		<aside className="lg:w-[40%] w-[90%] flex justify-start items-start flex-col gap-4 sticky top-10">
			<p className="text-purple-500 text-2xl">Total:</p>
			<p className="text-4xl">{getTotalAmount(items)}$</p>
			<button className="bg-purple-600 text-white lg:w-[50%] md:w-[80%] w-[100%] lg:h-12 h-[4.5rem] rounded">
				Purchase
			</button>
		</aside>
	);
};

export default FinalizeCard;
