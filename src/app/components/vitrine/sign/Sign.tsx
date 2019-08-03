import classNames from "classnames";
import * as React from "react";
import { useState } from "react";
import "./Sign.scss";

const Sign: React.FunctionComponent<any> = props => {
	return (
		<div className="loginContainer">
			<div className="componentContainer">
				<SignIn />
				<SignUp />
			</div>
		</div>
	);
};

const SignIn: React.FunctionComponent<any> = props => {
	const [isContentOpened, setIsContentOpened] = useState(false);

	return (
		<div className="signInContainer">
			<div
				className={classNames("signContentContainer", {
					"signContentContainer--closed": !isContentOpened,
					"signContentContainer--opened": isContentOpened
				})}
			/>
			<button
				className={classNames("btn btn--large login", {
					"btn--alone": !isContentOpened,
					"btn--not-alone": isContentOpened
				})}
				onClick={() => {
					setIsContentOpened(!isContentOpened);
				}}>
				Se connecter
			</button>
		</div>
	);
};

const SignUp: React.FunctionComponent<any> = props => {

	return <div className="signUpContainer" />;
};

export default Sign;
