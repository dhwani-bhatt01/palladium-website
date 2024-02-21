import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton() {
	return (
		<div className="flex w-full max-w-xl items-center my-8">
			<Input
				type="email"
				placeholder="Enter your email address"
				className="flex-grow bg-transparent rounded-none border-0 border-b border-[#F5D64E] font-Montserrat"
			/>
			<Button className="tracking-widest" type="submit">
				Subscribe
			</Button>
		</div>
	);
}
