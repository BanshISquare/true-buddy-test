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
				<SignComponent
					assignedValue={ContentState.SIGNIN}
					buttonLabel="Se connecter"
					currentlyOpenedTab={currentlyOpenedTab}
					toggleTab={setCurrentlyOpenedTab}
				/>
				<SignComponent
					assignedValue={ContentState.SIGNUP}
					buttonLabel="S'inscrire'"
					currentlyOpenedTab={currentlyOpenedTab}
					toggleTab={setCurrentlyOpenedTab}
				/>
			</div>
		</div>
	);
};

interface ISignComponentProps {
	assignedValue: ContentState;
	buttonLabel: string;
	currentlyOpenedTab: ContentState;
	toggleTab: (state: ContentState) => void;
}

const SignComponent: React.FunctionComponent<ISignComponentProps> = ({
	assignedValue,
	buttonLabel,
	currentlyOpenedTab,
	toggleTab,
}): JSX.Element => {
	const [isTabOpened, setIsTabOpened] = useState<boolean>(false);

	useEffect((): void => {
		setIsTabOpened(currentlyOpenedTab === assignedValue);
	}, [currentlyOpenedTab]);

	return (
		<div className="signContainer">
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
					toggleTab(isTabOpened ? ContentState.BOTH_CLOSED : assignedValue);
				}}
				type="button"
			>
				{buttonLabel}
			</button>
		</div>
	);
};

export default Sign;
