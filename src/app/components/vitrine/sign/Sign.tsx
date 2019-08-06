import classNames from 'classnames';
import React, { useState } from 'react';
import './Sign.scss';

const Sign: React.FunctionComponent<{}> = (): JSX.Element => (
	<div className="loginContainer">
		<div className="componentContainer">
			<SignIn />
			<SignUp />
		</div>
	</div>
);

const SignIn: React.FunctionComponent<{}> = (): JSX.Element => {
	const [isContentOpened, setIsContentOpened] = useState(false);

	return (
		<div className="signInContainer">
			<div className={classNames('signContentContainer', {
				'signContentContainer--closed': !isContentOpened,
				'signContentContainer--opened': isContentOpened,
			})}
			/>
			<button
				className={classNames('btn btn--large login', {
					'btn--alone': !isContentOpened,
					'btn--not-alone': isContentOpened,
				})}
				onClick={(): void => {
					setIsContentOpened(!isContentOpened);
				}}
				type="button"
			>
				Se connecter
			</button>
		</div>
	);
};

const SignUp: React.FunctionComponent<{}> = (): JSX.Element => <div className="signUpContainer" />;

export default Sign;
