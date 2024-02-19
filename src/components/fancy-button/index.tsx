import { ReactNode } from "react";
import styles from "./fancy-button.module.css";

type Props = {
	children: ReactNode;
};
export const FancyButton = (props: Props) => {
	const { children } = props;
	return (
		<button className={styles.btn}>
			<div className={styles.child}>{children}</div>
		</button>
	);
};
