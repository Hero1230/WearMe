import ItemListPreview from "@/components/item-list-preview/ItemListPreview";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="flex h-[20%] w-full items-center justify-center mb-[3rem]">
				<Image
					src="/taylor-smith-aDZ5YIuedQg-unsplash.jpg"
					alt=""
					height={1000}
					width={1000}
					className="object-cover h-[30rem] w-screen"
				/>
			</div>
			<ItemListPreview category="bestseller" quantity={3} title="Bestsellers" />
			<ItemListPreview category="bestseller" quantity={3} title="Recommended" />
			<ItemListPreview category="bestseller" quantity={3} title="Mid" />
			<ItemListPreview category="bestseller" quantity={3} title="Low" />
		</>
	);
}
