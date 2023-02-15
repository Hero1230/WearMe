import EmptyCart from "@/components/cart/EmptyCart";
import FinalizeCard from "@/components/cart/FinalizeCard";
import { CartState } from "@/types/types";
import Head from "next/head";
import { useSelector } from "react-redux";
import ItemCard from "../components/cart/ItemCard";

const Cart = () => {
	const items = useSelector((state: CartState) => state.cart.items);
	if (items.length === 0) {
		return (
			<>
				<Head>
					<title>WearMe - Keep Shopping!</title>
				</Head>
				<EmptyCart />
			</>
		);
	}
	return (
		<div className="lg:m-[5rem] m-[2rem] flex justify-center items-start gap-[10rem] flex-wrap lg:flex-nowrap">
			<Head>
				<title>WearMe - Cart</title>
			</Head>
			<div className="md:w-[100%] lg:w-[70%] flex justify-center items-center flex-col gap-[5rem]">
				{items.map((item) => (
					<ItemCard
						key={item.id}
						title={item.title}
						price={item.price}
						description={item.description}
						id={item.id}
						quantity={item.quantity}
					/>
				))}
			</div>
			<FinalizeCard />
		</div>
	);
};

export default Cart;
