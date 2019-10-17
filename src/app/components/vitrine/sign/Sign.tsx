import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import './Sign.scss';

const Sign: React.FunctionComponent<{}> = (): JSX.Element => {

	return (
		<div className="loginContainer">
			<div className="componentContainer">
				<SignComponentsContainer />
			</div>
		</div>
	);
};

const SignComponentsContainer: React.FunctionComponent = (): JSX.Element => {
	const [displayedTabIndex, setDisplayedTabIndex] = useState(undefined);
	const [isSwitchingTab, setIsSwitchingTab] = useState(false);
	const [isTabOpened, setIsTabOpened] = useState<boolean>(false);

	useEffect((): void => {
		setTimeout((): void => {
			setIsTabOpened(true);
		}, 750);
	}, []);

	useEffect((): void => {
		if (displayedTabIndex === undefined) {
			return;
		}

		setIsSwitchingTab(true);
		setTimeout((): void => {
			setIsSwitchingTab(false);
		}, 750);
	}, [displayedTabIndex]);

	return (
		<div className={classNames('sign-components-container', {
			'switch-tab-animation': isSwitchingTab,
			'sign-components-container--closed': !isTabOpened,
			'sign-components-container--opened': isTabOpened,
		})}
		>
			{displayedTabIndex === 0 && (
				<SignPanel
					buttonLabel="Se connecter"
					index={1}
				/>
			)}
			{displayedTabIndex === 1 && (
				<SignPanel
					buttonLabel="S'inscrire"
					index={1}
				/>
			)}
		</div>
	);
};

interface ISignPanelProps {
	buttonLabel: string;
	index: number;
}

const SignPanel: React.FunctionComponent<ISignPanelProps> = ({
	buttonLabel,
	index,
}): JSX.Element => {

	return (
		<div />
	);
};

export default Sign;
