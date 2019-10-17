import * as React from 'react';
import { Link } from 'react-router-dom';

const VitrineHeader: React.FunctionComponent<{}> = (): JSX.Element => (
	<div>
		<Link to="/sign">Sign</Link>
		Header
	</div>
);

export { VitrineHeader };
