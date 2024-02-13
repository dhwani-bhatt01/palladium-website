import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import styles from "./styles.module.css";

type Props = {
	backgroundImage: StaticImageData;
};

export const BlogsAndMediaCard = (props: Props) => {
	const { backgroundImage } = props;

	return (
		<div className={cn(styles.container, "h-44 w-96")}>
			{/* <div className="w-[500px] h-[500px] bg-red-600"></div> */}
		</div>
	);
};
