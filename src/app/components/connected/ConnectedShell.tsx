import * as React from 'react';
import Header from './header/Header';
import ContentShell from './content-shell/ContentShell';

const ConnectedShell: React.FunctionComponent<{}> = (): JSX.Element => (
	<>
		<Header />
		<ContentShell />
	</>
);

export { ConnectedShell };
