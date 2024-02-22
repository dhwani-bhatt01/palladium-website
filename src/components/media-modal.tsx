import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
	// title: string;
	videoSrc: string;
	isOpen: boolean;
	onClose: () => void;
};

export const MediaModal = (props: Props) => {
	const { videoSrc, isOpen, onClose } = props;

	return (
		<Dialog
			open={isOpen}
			onOpenChange={(newOpen) => {
				if (!newOpen) {
					onClose();
				}
			}}
		>
			<DialogTrigger>
				{/* <PlayCircle
					color="#F5D64E"
					strokeWidth={1.75}
					size={40}
					onClick={toggleModal}
				/> */}
			</DialogTrigger>
			<DialogContent className="bg-black">
				<DialogHeader>
					{/* <DialogTitle>{title}</DialogTitle> */}
					{isOpen && (
						<DialogDescription>
							<iframe width="100%" height="315px" src={videoSrc} />
						</DialogDescription>
					)}
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
