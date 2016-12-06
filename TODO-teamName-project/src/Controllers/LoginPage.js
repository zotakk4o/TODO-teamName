import React, { Component } from 'react';
import LoginView from '../Views/LoginView';
import {loginUser} from '../Models/KinveyRequester';
import Warden from '../Controllers/Warden'

export default class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            inpDisabled:false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
        event.preventDefault();
        this.setState({
            inpDisabled:true
        });
        loginUser(this.state.username,this.state.password).then(loginSuccess.bind(this)).catch((error)=>{
            let resp = JSON.parse(error.responseText);
            Warden.showInfoOrError('error',resp.description);
            this.setState({
                inpDisabled:false
            })
        });
        function loginSuccess(userData) {
            this.setState({
                inpDisabled:false
            });
            this.saveInSession(userData);
            Warden.sessionUpdate();
            Warden.showInfoOrError('info','Successfully logged in.');
            this.context.router.push('/')
        }
    }
    saveInSession(userData){
        sessionStorage.setItem('authToken',userData._kmd.authtoken);
        sessionStorage.setItem('username',userData.username);
        sessionStorage.setItem('userId',userData._id);
    }
    onChange(event){
        event.preventDefault();
        let newState={};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }
    render() {
        return (
            <LoginView
                username={this.state.username}
                password={this.state.password}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                disabled={this.state.inpDisabled}
            />
        );
    }
}
LoginPage.contextTypes = {
    router: React.PropTypes.object
};