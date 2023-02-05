import ItemListPreview from "@/components/item-list-preview/ItemListPreview";
import Image from "next/image";
import mainImage from "../../public/taylor-smith-aDZ5YIuedQg-unsplash.jpg";

export default function Home() {
	return (
		<>
			<div className="flex h-[20%] w-full items-center justify-center mb-[3rem]">
				<Image
					src={mainImage}
					alt="main image of nike"
					placeholder="blur"
					priority
					sizes="100vw"
					width={200}
					height={200}
					className="object-cover h-[30rem] w-screen"
				/>
			</div>
			<ItemListPreview category="bestseller" quantity={3} title="Bestsellers" />
			<ItemListPreview
				category="recommended"
				quantity={3}
				title="Recommended"
			/>
			<ItemListPreview category="mid" quantity={3} title="Mid" />
			<ItemListPreview category="low" quantity={3} title="Low" />
		</>
	);
}
