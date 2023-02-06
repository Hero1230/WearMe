import { ReactNode } from "react";
import ArrowUp from "../arrow-up/ArrowUp";
import MainHeader from "./MainHeader";

interface Props {
	children: ReactNode;
}

const Layout = (props: Props) => {
	return (
		<>
			<MainHeader />
			<main className="relative">
				{props.children}
				<ArrowUp />
			</main>
		</>
	);
};

export default Layout;
