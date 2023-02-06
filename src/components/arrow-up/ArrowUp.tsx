import { useEffect, useRef, useState } from "react";

const ArrowUp = () => {
	const [showArrow, setShowArrow] = useState(false);
	const scrollListener = useRef<EventListener | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			setShowArrow(window.pageYOffset > window.innerHeight);
		};
		scrollListener.current = handleScroll;
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<button
			className={`fixed bottom-8 right-[1rem] ${!showArrow && "hidden"}`}
			onClick={() => {
				window.scrollTo(0, 0);
			}}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 120 120"
				height="4rem"
				width="4rem">
				<path
					fill="#9333ea"
					d="M22.2 68.5c1.1 0 2.1-.4 2.9-1.1L60 39.8l34.9 27.6c.8.7 1.8 1.1 2.9 1.1 1.3 0 2.4-.5 3.3-1.5.7-.8 1.1-1.8 1.1-2.9 0-1.3-.5-2.4-1.5-3.3l-37.6-30c-.1-.1-.2-.2-.4-.3-.1-.1-.2-.2-.4-.3-.1-.1-.2-.2-.3-.2-.1-.1-.3-.1-.4-.2-.1-.1-.3-.1-.4-.1-.1 0-.3-.1-.4-.1-.1 0-.3-.1-.4-.1h-.9c-.1 0-.3 0-.4.1-.1 0-.3.1-.4.1-.1 0-.3.1-.4.1-.1.1-.2.2-.3.2-.1.1-.2.1-.3.2-.1.1-.3.2-.4.3-.1.1-.2.2-.4.3L19.3 60.9c-1.8 1.6-2 4.4-.3 6.2.8.9 2 1.4 3.2 1.4z"
				/>
				<path
					fill="#9333ea"
					d="M63.1 52.7c-.1-.1-.2-.2-.4-.3-.1-.1-.2-.2-.4-.3 0 0-.2-.1-.3-.1-.1-.1-.3-.1-.4-.2-.1-.1-.3-.1-.4-.1-.1 0-.3-.1-.4-.1-.1 0-.3-.1-.4-.1h-.9c-.1 0-.3 0-.4.1-.1 0-.3.1-.4.1-.1 0-.3.1-.4.1-.1.1-.3.1-.4.2-.1.1-.2.1-.3.2-.1.1-.3.2-.4.3-.1.1-.2.2-.4.3l-37.5 30c-1.8 1.6-2 4.4-.3 6.2.8.9 2 1.5 3.3 1.5 1.1 0 2.1-.4 2.9-1.1L60 61.7l34.9 27.6c.8.7 1.8 1.1 2.9 1.1 1.3 0 2.4-.5 3.3-1.5.7-.8 1.1-1.8 1.1-2.9 0-1.3-.5-2.4-1.5-3.3l-37.6-30z"
				/>
			</svg>
		</button>
	);
};

export default ArrowUp;
