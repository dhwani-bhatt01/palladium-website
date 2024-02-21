import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import { useState } from "react";

type Props = {
	// title: string;
	videoSrc: string;
};

export const MediaModal = (props: Props) => {
	const { videoSrc } = props;
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<Dialog>
			<DialogTrigger>
				<PlayCircle
					color="#F5D64E"
					strokeWidth={1.75}
					size={40}
					onClick={toggleModal}
				/>
			</DialogTrigger>
			<DialogContent className="bg-black">
				<DialogHeader>
					{/* <DialogTitle>{title}</DialogTitle> */}
					{isModalOpen && (
						<DialogDescription>
							<iframe width="100%" height="315px" src={videoSrc} />
						</DialogDescription>
					)}
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
