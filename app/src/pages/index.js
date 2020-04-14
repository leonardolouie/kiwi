import React,{Component} from "react"
import Amplify,{Auth, Hub} from 'aws-amplify';

import {navigate} from 'gatsby';
import config from "../aws-exports";
Amplify.configure(config);



class Editor extends Component{
    componentDidMount(){
        console.log('on component mount');
        Auth.currentAuthenticatedUser().then(user => {
            console.log(user);
        }).catch(e =>{
            console.log('you are not authenticated');
            console.log(e);
        });

        navigate('/login');
    }

    signout = () => {
        Auth.signOut().then(() =>{
            console.log('singed out');
        }).catch(e => {
            console.log(e);
        })
    }
    render(){
        return(<div>you are logged in <button onClick  = {this.signout}>signout</button></div>);
    }
}

export default Editor;

