import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase/index";

export default function useGetImageUrl(url: string) {
	const [imageUrl, setImageUrl] = useState("");
	const getImage = async () => {
		const image = await getDownloadURL(ref(storage, url));
		setImageUrl(image);
	};
	useEffect(() => {
		getImage();
	}, [url]);
	return imageUrl;
}
