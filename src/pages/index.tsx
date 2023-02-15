import ItemListPreview from "@/components/item-list-preview/ItemListPreview";
import fetchData from "@/utils/FetchData";
import Image from "next/image";
import mainImage from "../../public/taylor-smith-aDZ5YIuedQg-unsplash.jpg";

export default function Home(props: any) {
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
			<ItemListPreview
				data={props.bestsellerData}
				link="bestseller"
				title="Bestsellers"
				animation="fade-right"
			/>
			<ItemListPreview
				data={props.recommendedData}
				link="recommended"
				title="Recommended"
				animation="fade-right"
			/>
			<ItemListPreview
				data={props.midData}
				link="mid"
				title="Mid"
				animation="fade-right"
			/>
			<ItemListPreview
				data={props.lowData}
				link="low"
				title="Low"
				animation="fade-right"
			/>
		</>
	);
}

export async function getStaticProps() {
	const bestsellerData = await fetchData("bestseller", 3);
	const recommendedData = await fetchData("recommended", 3);
	const midData = await fetchData("mid", 3);
	const lowData = await fetchData("low", 3);

	return {
		props: {
			bestsellerData,
			recommendedData,
			midData,
			lowData,
		},
		revalidate: 600,
	};
}
