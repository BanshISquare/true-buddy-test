import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { History } from 'history';
import VitrineShell from './vitrine/VitrineShell';
import { ConnectedShell } from './connected/ConnectedShell';

interface IAppShellProps {
	history: History;
}

const AppShell: React.FunctionComponent<IAppShellProps> = ({ history }): JSX.Element => (
	<div>
		<Router history={history}>
			<Switch>
				<Route path="/" component={VitrineShell} />
				{/* <Route exact path="/dashboard" component={ConnectedShell} /> */}
			</Switch>
		</Router>
	</div>
);

export default AppShell;
