/* eslint-disable react/no-unescaped-entities */
import ItemListPreview from "@/components/item-list-preview/ItemListPreview";
import Loader from "@/components/loader/Loader";
import useGetImageUrl from "@/hooks/useGetImageUrl";
import { Item } from "@/types/types";
import fetchData from "@/utils/FetchData";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductDetails = () => {
	const router = useRouter();
	const query = router.query.productId
		? `images/${router.query.productId}.webp`
		: "";
	const imageUrl = useGetImageUrl(query);

	const [data, setData] = useState<Item[] | null>(null);
	useEffect(() => {
		fetchData("bestseller", 3).then((prod) => setData(prod));
	}, []);

	return (
		<>
			<div className="flex gap-[2rem] mx-[5rem] flex-col md:flex-row mb-[2rem]">
				<div className="w-[100%] md:w-[45%]">
					<Image
						src={imageUrl}
						alt={"siema"}
						width={240}
						height={160}
						sizes="100%"
						className="object-cover w-[100%]"
					/>
				</div>
				<div className="flex justify-center flex-col w-[100%] md:w-[45%]">
					<h2 className="text-3xl font-bold pb-[2rem]">
						Nike Air Jordan 1 Low "White University Red
					</h2>
					<p className="opacity-60">
						Denne Jordan 1 Low "White/university Red" kombinerer stil og komfort
						i en utrolig enkel og clean farvesammensætning. Skoen består af en
						hvid base, der står i smuk kontrast til det røde swoosh, der
						garanteret sørger for mange blikke! Ønsker du en smøle mørkere
						swoosh i en Air Force model anbefaler vi denne - Air Force 1 "Team
						Red".
					</p>
					<p className="text-3xl font-bold py-[2rem]">$200</p>
					<div className="pt-2 flex flex-row gap-1">
						<button className="bg-purple-500 p-6 md:p-4 rounded text-red-50">
							ADD TO CART
						</button>
						<button className="flex justify-center items-center bg-purple-500 rounded md:p-4 p-6">
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
			{data ? (
				<ItemListPreview title="You might like" link="bestseller" data={data} />
			) : (
				<Loader />
			)}
		</>
	);
};

export default ProductDetails;
