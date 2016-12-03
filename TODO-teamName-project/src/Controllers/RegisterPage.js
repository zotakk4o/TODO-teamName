import React, { Component } from 'react';
import RegisterView from '../Views/RegisterView';
import {registerUser} from '../Models/KinveyRequester';
import Warden from '../Controllers/Warden'

export default class RegisterPage extends Component {
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
        registerUser(this.state.username,this.state.password).then(registerSuccess.bind(this)).catch((error)=>{
            let resp = JSON.parse(error.responseText);
            Warden.showInfoOrError('error',resp.description)
        });
        function registerSuccess(userData) {
            this.saveInSession(userData);
            Warden.sessionUpdate();
            Warden.showInfoOrError('info','Registration was successful.');
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
            <RegisterView
                username={this.state.username}
                password={this.state.password}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
            />
        );
    }
}
RegisterPage.contextTypes = {
    router: React.PropTypes.object
};