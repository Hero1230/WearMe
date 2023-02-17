import Layout from "../components/layout/Layout";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { store } from "../store/store";
import { Provider } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Head from "next/head";
import mainImage from "../../public/taylor-smith-aDZ5YIuedQg-unsplash.jpg";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<Provider store={store}>
			<Head>
				<meta name="author" content="Max Mogilski" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Looking for the hottest Jordan Nike sneakers online? Look no further than our webshop! Our collection is carefully curated to include the latest and greatest designs and colorways, from the most iconic classics to new releases. With our easy-to-use online platform, you can browse, shop, and purchase your favorite pairs of Jordans and Nikes with just a few clicks. Step up your shoe game and add some serious style to your wardrobe by shopping our selection today!"
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<ToastContainer />
		</Provider>
	);
}
