import { useState } from "react";

import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import ErrorPopup from "../UI/ErrorPopup.js";
import styles from "./AddUsers.module.css";

const AddUser = (props) => {
	const [inputUsername, setInputUseranme] = useState("");
	const [inputAge, setInputAge] = useState("");
	const [errorBit,setErrorBit] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		if (inputUsername.trim().length === 0 || inputAge.trim().length === 0) {
			setErrorBit({
				header:"Invalid input",
				message:"Please enter valid input"
			});
			return;
		}
		if (+inputAge < 1) {
			setErrorBit({
				header:"Invalid age",
				message:"Please enter valid age (>0)"
			})
			return;
		}
		props.onAdd(inputUsername, inputAge);
		setInputUseranme("");
		setInputAge("");
	};

	const errorHandler = () => {
		setErrorBit(null);
	}

	const handleUsernameChange = (event) => {
		setInputUseranme(event.target.value);
	};

	const handleAgeChange = (event) => {
		setInputAge(event.target.value);
	};

	return (
		<div>
			{errorBit && <ErrorPopup
				header={errorBit.header}
				message={errorBit.message}
				onConfirm ={errorHandler}
			></ErrorPopup>}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						value={inputUsername}
						onChange={handleUsernameChange}
					/>
					<label htmlFor="age">Age</label>
					<input
						type="number"
						id="age"
						value={inputAge}
						onChange={handleAgeChange}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
