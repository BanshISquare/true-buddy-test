import * as React from "React";
import "./Sign.scss";

export class Sign extends React.Component<any, any> {
    render() {
        return <div className="loginContainer">
            <div className="componentContainer">
                <SignIn></SignIn>
                <SignUp></SignUp>
            </div>
        </div>
    }
}

class SignIn extends React.Component<any, any> {
    render() {
        return <div className="signInContainer">
            <button className="btn login"></button>
        </div>
    }
}

class SignUp extends React.Component<any, any> {
    render() {
        return <div className="signUpContainer">

        </div>
    }
}