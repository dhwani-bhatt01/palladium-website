import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
	children: ReactNode;
};

export const CroppedBorderContainer = (props: Props) => {
	const { children } = props;

	return <div className={styles.container}>{children}</div>;
};
