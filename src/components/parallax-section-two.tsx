"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const ParallaxSectionTwo = () => {
	const controls = useAnimation();
	const divRef = useRef<HTMLDivElement | null>(null);
	const [isAtTop, setIsAtTop] = useState(false);
	const [scrollHandled, setScrollHandled] = useState(false);

	useEffect(() => {
		const handleScroll = (e: any) => {
			// const divTop = divRef.current?.getBoundingClientRect().top;

			// // Set a threshold (e.g., 0) for when the div is considered at the top
			// const isTop = (divTop ?? 0) <= 0;
			// setIsAtTop(isTop);
			// if (isTop) {
			// 	e.preventDefault();
			// }
			if (!scrollHandled) {
				const divTop = divRef.current?.getBoundingClientRect().top;

				// Set a threshold (e.g., 0) for when the div is considered at the top
				const isTop = (divTop ?? 0) <= 0;
				setIsAtTop(isTop);

				if (isTop) {
					e.preventDefault();
					setScrollHandled(true); // Set the flag to true once scroll is handled
					window.removeEventListener("scroll", handleScroll);
				}
			}
		};

		// Attach scroll event listener
		// window.addEventListener("scroll", handleScroll);
		// if (!isAtTop) {
		// 	window.addEventListener("scroll", handleScroll, { passive: false });
		// } else {
		// 	window.removeEventListener("scroll", handleScroll);
		// }

		// Attach scroll event listener
		window.addEventListener("scroll", handleScroll, { passive: false });

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollHandled]);

	// Clean up the event listener on component unmount
	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	// Use isAtTop state to trigger animations or apply styles
	useEffect(() => {
		if (isAtTop) {
			// Your logic when the div touches the top of the viewport
			console.log("Div touches the top of the viewport");
			document.body.style.overflowY = "hidden";
			setTimeout(() => {
				document.body.style.overflowY = "auto";
			}, 6000);
		}
	}, [isAtTop]);

	return (
		<div className="min-h-screen w-full px-6 max-w-5xl mx-auto" ref={divRef}>
			<div className="flex justify-between pt-64 text-center">
				<motion.div
					className="w-72"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					// viewport={{ once: true }}
					transition={{
						type: "spring",
						// bounce: 0.4,
						duration: 1,
						delay: 2,
					}}
					// initial="hidden"
					// whileInView="visible"
					// viewport={{ once: true }}
					// transition={{ duration: 0.3 }}
					// variants={{
					// 	visible: { opacity: 1, scale: 1 },
					// 	hidden: { opacity: 0, scale: 0 },
					// }}
				>
					<h2 className="font-semibold text-[24px]">
						<span className="text-[#F5D64E]">SECURED</span> BY BITCOIN
					</h2>
					<p className="font-medium text-[16px]">
						Palladium protocol is operated upon Botanix - a truly decentralized
						smart contract platform secured by the most robust blockchain in the
						world.
					</p>
				</motion.div>
				<motion.div
					className="w-72 mt-60"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					// viewport={{ once: true }}
					transition={{
						type: "spring",
						// bounce: 0.4,
						duration: 1,
						delay: 4,
					}}
				>
					<h2 className="font-semibold text-[24px]">
						<span className="text-[#F5D64E]">GOVERNANCE-FREE</span> LIKE BITCOIN
					</h2>
					<p className="font-medium text-[16px]">
						Palladium employs an algorithmic monetary policy. There is no
						governance, DAO, or admin keys to ensure protocol can never be
						censored or manipulated.
					</p>
				</motion.div>
				<motion.div
					className="w-72"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					// viewport={{ once: true }}
					transition={{
						type: "spring",
						// bounce: 0.4,
						duration: 1,
						delay: 6,
					}}
					// initial="hidden"
					// whileInView="visible"
					// viewport={{ once: true }}
					// transition={{ duration: 1.3 }}
					// variants={{
					// 	visible: { opacity: 1, scale: 1 },
					// 	hidden: { opacity: 0, scale: 0 },
					// }}
				>
					<h2 className="font-semibold text-[24px]">
						<span className="text-[#F5D64E]">SECURED</span> BY BITCOIN
					</h2>
					<p className="font-medium text-[16px]">
						Palladium protocol is operated upon Botanix - a truly decentralized
						smart contract platform secured by the most robust blockchain in the
						world.
					</p>
				</motion.div>
			</div>
		</div>
	);
};
