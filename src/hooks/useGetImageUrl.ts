import { getDownloadURL, ref } from "firebase/storage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { storage } from "../firebase/index";

export default function useGetImageUrl(url: string) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const getImage = async () => {
    const image = await getDownloadURL(ref(storage, url));
    setImageUrl(image);
  };
  useEffect(() => {
    if (url === "") {
      return;
    }
    getImage().catch((error) => {
      router.push("/categories/not-found");
    });
  }, [url]);
  return imageUrl;
}
