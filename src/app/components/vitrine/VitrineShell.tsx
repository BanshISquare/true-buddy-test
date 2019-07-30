import * as React from 'react';
import {Route, Link, Switch } from "react-router-dom";
import { VitrineHome } from './home/home';
import { VitrineHeader } from './header/header';
import Sign from './sign/Sign';

const VitrineShell: React.FunctionComponent<any> = (props) => {

    return (
        <div>
            Vitrine !
            <VitrineHeader></VitrineHeader>
            <Switch>
                <Route exact path="/" component={VitrineHome} />
                <Route exact path="/sign" component={Sign} />
            </Switch>
        </div>
    );
}

export default VitrineShell;