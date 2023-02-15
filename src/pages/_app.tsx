import Layout from "@/components/layout/Layout";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { store } from "../store/store";
import { Provider } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<ToastContainer />
		</Provider>
	);
}
