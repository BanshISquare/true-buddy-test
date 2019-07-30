import * as React from "React";
import { useState } from "React";
import classNames from 'classnames';
import "./Sign.scss";


const Sign: React.FunctionComponent<any> = (props) => {

    return (
        <div className="loginContainer">
            <div className="componentContainer">
                <SignIn></SignIn>
                <SignUp></SignUp>
            </div>
        </div>
    );
}

const SignIn: React.FunctionComponent<any> = (props) => {

    const [isContentOpened, setIsContentOpened] = useState(false);

    return (
        <div className="signInContainer">
            {isContentOpened && 
                <div className={classNames('signContentContainer', {
                        'signContentContainer--open': isContentOpened,
                        'signContentContainer--closed': !isContentOpened,
                    })}
                >
                </div>
            }
            <button className="btn btn--large login" onClick={() => {setIsContentOpened(!isContentOpened)}}>
                Se connecter
            </button>
        </div>
    );
}

const SignUp: React.FunctionComponent<any> = (props) => {

    return (
        <div className="signUpContainer">
        </div>
    );
}

export default Sign;