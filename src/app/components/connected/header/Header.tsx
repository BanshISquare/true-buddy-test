import * as React from 'react';
import HeaderNavigation from '../header-navigation/HeaderNavigation';

const LocaleManager = (): JSX.Element => <></>;
const HeaderSocials = (): JSX.Element => <></>;
const UserProfile = (): JSX.Element => <></>;
const HeaderSearch = (): JSX.Element => <></>;

const Header: React.FunctionComponent<{}> = (): JSX.Element => (
	<div className="connected-header">
		<div className="container-fluid connected-header_content-container">
			<div className="site-logo" />
			<div className="header-content">
				<div className="header-content_sub">
					<>
						<LocaleManager />
						<HeaderSocials />
					</>
					<UserProfile />
				</div>
				<div className="header-content_sub">
					<HeaderNavigation />
					<HeaderSearch />
				</div>
			</div>
		</div>
	</div>
);

export default Header;
