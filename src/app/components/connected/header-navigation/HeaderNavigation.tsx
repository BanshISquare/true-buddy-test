import * as React from 'react';

const IS_CONNECTED = true;

const HeaderNavigation: React.FunctionComponent<{}> = (): JSX.Element => {
	return (
		<nav className="header-navigation">
			<ul className="header-navigation_navlinks">
				<li className="header-navigation_navlinks_link">
					HOME
				</li>
				<li className="header-navigation_navlinks_link">
					CHARTS
				</li>
				<li className="header-navigation_navlinks_link">
					ABOUT
				</li>
				{IS_CONNECTED && (
					<li className="header-navigation_navlinks_link connected">
						PROFILE
					</li>
				)}
			</ul>
		</nav>
	);
};

export default HeaderNavigation;
