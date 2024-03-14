import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { isValidEmail } from "@/utils/is-valid-email";
import { subscribeToPalladium } from "@/utils/subscribe-to-palladium";
import { useState } from "react";

export function InputWithButton() {
	const [emailInput, setEmailInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();

	const handleSubscribe = async () => {
		try {
			setIsLoading(true);
			if (!isValidEmail(emailInput)) {
				return toast({
					title: "Invalid email",
					description: "Please enter a valid email",
					variant: "destructive",
				});
			}
			const time = new Date().toString();
			await subscribeToPalladium({ email: emailInput, timestamp: time });
			toast({
				title: "Thanks!",
				description: "You have subscribed",
			});
		} catch (error) {
			console.error(error);
			toast({
				title: "Error",
				description: "Something went wrong",
				variant: "destructive",
			});
		} finally {
			setIsLoading(false);
			setEmailInput("");
		}
	};

	return (
		<div className="flex w-full max-w-xl items-center my-8">
			<Input
				type="email"
				placeholder="Enter your email address"
				value={emailInput}
				onChange={(e) => {
					setEmailInput(e.target.value);
				}}
				className="flex-grow bg-transparent rounded-none border-0 border-b border-[#F5D64E] font-Montserrat"
			/>
			<Button
				className="tracking-widest"
				type="submit"
				onClick={handleSubscribe}
				disabled={isLoading}
			>
				{isLoading ? "Loading..." : "Subscribe"}
			</Button>
		</div>
	);
}
