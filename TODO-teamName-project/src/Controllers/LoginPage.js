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
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
        event.preventDefault();
        loginUser(this.state.username,this.state.password).then(loginSuccess.bind(this)).catch((error)=>console.log(error));
        function loginSuccess(userData) {
            this.saveInSession(userData);
            Warden.sessionUpdate();
            this.context.router.push('/adverts')
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
            />
        );
    }
}
LoginPage.contextTypes = {
    router: React.PropTypes.object
};