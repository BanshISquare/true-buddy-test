import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory, History } from 'history';
import AppShell from './components/AppShell';

import './styles/main.scss';

declare let document;

const history: History = createBrowserHistory();

ReactDOM.render(<AppShell history={history} />, document.getElementById('root'));
