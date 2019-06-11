import * as React from 'react';
import { Vitrine } from './vitrine/Vitrine';
import { ConnectedShell } from './connected/ConnectedShell';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class AppShell extends React.Component<any, any> {

   render() {
        return <div>
            <Router>
            <Link to="/dashboard">About</Link>
                <Route exact path="/" component={Vitrine} />
                <Route exact path="/dashboard" component={ConnectedShell} />
            </Router>;
        </div>
   }
}