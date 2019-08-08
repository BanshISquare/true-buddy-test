import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import './Sign.scss';

enum ContentState {
	BOTH_CLOSED = 0,
	SIGNIN,
	SIGNUP
}

const Sign: React.FunctionComponent<{}> = (): JSX.Element => {
	const [
		currentlyOpenedTab,
		setCurrentlyOpenedTab,
	] = useState<ContentState>(ContentState.BOTH_CLOSED);

	return (
		<div className="loginContainer">
			<div className="componentContainer">
				<SignIn currentlyOpenedTab={currentlyOpenedTab} toggleTab={setCurrentlyOpenedTab} />
				<SignUp currentlyOpenedTab={currentlyOpenedTab} toggleTab={setCurrentlyOpenedTab} />
			</div>
		</div>
	);
};

interface ISignInProps {
	currentlyOpenedTab: ContentState;
	toggleTab: (state: ContentState) => void;
}

const SignIn: React.FunctionComponent<ISignInProps> = ({
	currentlyOpenedTab,
	toggleTab,
}): JSX.Element => {
	const [isTabOpened, setIsTabOpened] = useState<boolean>(false);

	useEffect((): void => {
		setIsTabOpened(currentlyOpenedTab === ContentState.SIGNIN);
	}, [currentlyOpenedTab]);

	return (
		<div className="signInContainer">
			<div className={classNames('signContentContainer', {
				'signContentContainer--closed': !isTabOpened,
				'signContentContainer--opened': isTabOpened,
			})}
			/>
			<button
				className={classNames('btn btn--large login', {
					'btn--alone': !isTabOpened,
					'btn--not-alone': isTabOpened,
				})}
				onClick={(): void => {
					toggleTab(isTabOpened ? ContentState.BOTH_CLOSED : ContentState.SIGNIN);
				}}
				type="button"
			>
				Se connecter
			</button>
		</div>
	);
};

interface ISignUpProps {
	currentlyOpenedTab: ContentState;
	toggleTab: (state: ContentState) => void;
}

const SignUp: React.FunctionComponent<ISignUpProps> = ({
	currentlyOpenedTab,
	toggleTab,
}): JSX.Element => (
		<div className="signUpContainer" />
	);

export default Sign;
