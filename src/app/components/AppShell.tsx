import * as React from 'react';
import VitrineShell from './vitrine/VitrineShell';
import { ConnectedShell } from './connected/ConnectedShell';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

interface IAppShellProps {
    history: any;
}

const AppShell: React.FunctionComponent<IAppShellProps> = ({ history }) => {

    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path="/" component={VitrineShell} />
                    {/*<Route exact path="/dashboard" component={ConnectedShell} /> */}
                </Switch>
            </Router>
        </div>
    );
}

export default AppShell;