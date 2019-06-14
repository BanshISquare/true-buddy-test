import * as React from 'react';
import { Link } from "react-router-dom";

export class Vitrine extends React.Component<any, any> {
   render() {
        return <div>
            <Link to={"/sign"}>Sign</Link>
            Vitrine ! 
        </div>
   }
}