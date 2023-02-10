import Layout from "@/components/layout/Layout";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { store } from "../store/store";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<ToastContainer />
		</Provider>
	);
}
