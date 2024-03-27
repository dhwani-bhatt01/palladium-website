// import glowPng from "@/assets/glow-bg/glow-bg.png";
import glowPng from "@/assets/glow-bg/glow-bg.webp";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Script from "next/script";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Palladium | World’s Most Reliable Stablecoin",
	description:
		"A censorship-resistant USD-pegged cryptocurrency backed by the robustness of Bitcoin.",
	// icons: [
	// 	{
	// 		rel: "icon",
	// 		type: "image/webp",
	// 		url: "/favicon.webp",
	// 		sizes: "32x32",
	// 	},
	// ],
};

const montech = localFont({
	src: [
		{
			path: "./fonts/MONTECHV01-Black.otf",
			weight: "900",
			style: "normal",
		},
		{
			path: "./fonts/MONTECHV01-ExtraBold.otf",
			weight: "800",
			style: "normal",
		},
		{
			path: "./fonts/MONTECHV01-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/MONTECHV01-SemiBold.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/MONTECHV01-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/MONTECHV01-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/MONTECHV01-Light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/MONTECHV01-ExtraLight.otf",
			weight: "200",
			style: "normal",
		},
		{
			path: "./fonts/MONTECHV01-Thin.otf",
			weight: "100",
			style: "normal",
		},
	],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.webp" />
				<Script type="text/javascript" id="gtm-script">
					{`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-KKB89V3090');`}
				</Script>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-KKB89V3090"
				></Script>
			</head>

			<body
				className={cn(
					montech.className,
					"h-screen overflow-y-auto overflow-x-hidden relative bg-[radial-gradient(#5E5222_1.5px,_transparent_1.5px)] [background-size:30px_30px] bg-[#0A0A0A] bg-fixed"
				)}
			>
				<Image
					alt="Glow Background"
					src={glowPng}
					className="h-[1600px] z-0 fixed top-[-34%] left-[-44%]"
				/>

				<Image
					alt="Glow Background"
					src={glowPng}
					className="h-[1200px] z-0 fixed bottom-[-63%] right-[-45%]"
				/>

				<div className="z-10 relative">{children}</div>
				<div className="dark">
					<Toaster />
				</div>
			</body>
		</html>
	);
}
