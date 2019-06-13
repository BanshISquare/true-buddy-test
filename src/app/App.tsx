import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppShell } from './components/AppShell';
import { createBrowserHistory, History } from 'history';

const history: History<any> = createBrowserHistory()

ReactDOM.render(<AppShell history={history} />, document.getElementById('root'));