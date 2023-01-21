import { ReactNode } from "react";
import MainHeader from "./MainHeader";

interface Props {
	children: ReactNode;
}

const Layout = (props: Props) => {
	return (
		<>
			<MainHeader />
			<main>{props.children}</main>
		</>
	);
};

export default Layout;
