import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { VitrineHome } from './home/home';
import { VitrineHeader } from './header/header';
import Sign from './sign/Sign';

const VitrineShell: React.FunctionComponent<{}> = (): JSX.Element => (
	<div>
		Vitrine !
		<VitrineHeader />
		<Switch>
			<Route exact path="/" component={VitrineHome} />
			<Route exact path="/sign" component={Sign} />
		</Switch>
	</div>
);

export default VitrineShell;
