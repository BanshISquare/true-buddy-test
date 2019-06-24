import * as React from 'react';
import { VitrineShell } from './vitrine/VitrineShell';
import { ConnectedShell } from './connected/ConnectedShell';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

interface IAppShellProps {
    history: any;
}

export class AppShell extends React.Component<IAppShellProps, any> {

   render() {
        return <div>
            <Router history={this.props.history}>
                <Switch>
                    <Route path="/" component={VitrineShell} />
                    {/*<Route exact path="/dashboard" component={ConnectedShell} /> */}
                </Switch>
            </Router>
        </div>
   }
}