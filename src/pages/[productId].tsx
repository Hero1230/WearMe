/* eslint-disable react/no-unescaped-entities */
import ItemListPreview from "@/components/item-list-preview/ItemListPreview";
import Loader from "@/components/loader/Loader";
import { increaseCartQuantity } from "@/features/cart/CartSlice";
import useGetImageUrl from "@/hooks/useGetImageUrl";
import { Item } from "@/types/types";
import fetchData from "@/utils/FetchData";
import fetchSingleProduct from "@/utils/FetchSingleProduct";
import { notifyAddItem, notifyComingSoon } from "@/utils/Notifications";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const [product, setProduct] = useState<null | Item>(null);
	const [data, setData] = useState<Item[] | null>(null);

	const query = router.query.productId;
	const queryImage = router.query.productId
		? `images/${router.query.productId}.webp`
		: "";
	const imageUrl = useGetImageUrl(queryImage);

	useEffect(() => {
		fetchData("bestseller", 3).then((prod) => setData(prod));
	}, []);

	useEffect(() => {
		if (typeof query === "string") {
			fetchSingleProduct(query).then((prod) => setProduct(prod));
		}
	}, [query]);

	return (
		<>
			<div className="flex gap-[2rem] mx-[5rem] flex-col md:flex-row mb-[2rem]">
				<div className="w-[100%] md:w-[45%]">
					{imageUrl ? (
						<Image
							src={imageUrl}
							alt={"siema"}
							width={240}
							height={160}
							sizes="100%"
							className="object-cover w-[100%]"
						/>
					) : (
						<Loader />
					)}
				</div>
				<div className="flex justify-center flex-col w-[100%] md:w-[45%]">
					<h2 className="text-3xl font-bold pb-[2rem]">{product?.title}</h2>
					<p className="opacity-60">{product?.description}</p>
					<p className="text-3xl font-bold py-[2rem]">${product?.price}</p>
					<div className="pt-2 flex flex-row gap-1">
						<button
							className="bg-purple-500 p-6 md:p-4 rounded text-red-50"
							onClick={() => {
								dispatch(increaseCartQuantity({ ...product, quantity: 1 }));
								notifyAddItem();
							}}>
							ADD TO CART
						</button>
						<button
							className="flex justify-center items-center bg-purple-500 rounded md:p-4 p-6"
							onClick={notifyComingSoon}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="#ffffff"
								className="w-6 h-6">
								<path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<ItemListPreview title="You might like" link="bestseller" data={data} />
		</>
	);
};

export default ProductDetails;
