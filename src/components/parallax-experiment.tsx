import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ParallaxHeroSection = () => {
	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

	useEffect(() => {
		let lastScrollTop =
			window.pageYOffset || document.documentElement.scrollTop;
		const handleScroll = () => {
			const currentScrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			setScrollDirection(currentScrollTop < lastScrollTop ? "up" : "down");
			lastScrollTop = currentScrollTop;
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	console.log("Scroll direction:", scrollDirection); // Debugging: Check the scroll direction

	return (
		<div>
			{/* Your other JSX elements */}
			{scrollDirection === "up" && (
				<div className="w-72 mt-60">
					{/* Use div instead of motion.div when static */}
					{/* Content of the static div */}
				</div>
			)}
			{scrollDirection === "down" && (
				<motion.div
					className="w-72 mt-60"
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1, // Keep div static if scrolling up
					}}
					transition={{
						type: "spring",
						duration: 1,
						delay: 2, // Delay for downward scroll
					}}
				>
					{/* Content of the motion.div */}
				</motion.div>
			)}
		</div>
	);
};
