import React,{Component} from "react";
import Amplify, {Auth, Hub} from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);



class In extends Component{
    state = {user: null, customState: null};
    render(){
        const {user} = this.state;

        return(
            <div>
                <button onClick={() => Auth.federatedSignIn({provider: 'Facebook'})}>Open Facebook</button>
                <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Open Google</button>
            </div>
        );
    }
}

export default In;