import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorPopup.module.css";

const ErrorPopup = (props) => {
	return (
		<div>
            <div className={styles.backdrop} onClick={props.onConfirm}></div>
			<Card className={styles.popup}>
				<header className={styles.header}>
					<h2>{props.header}</h2>
				</header>
				<div className={styles.content}>
					<p>{props.message}</p>
				</div>
				<footer className={styles.actions}>
					<Button onClick={props.onConfirm}>Okay</Button>
				</footer>
			</Card>
		</div>
	);
};

export default ErrorPopup;
