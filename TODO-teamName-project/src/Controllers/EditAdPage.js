import React, { Component } from 'react';
import EditAdView from '../Views/EditAdView';
import Warden from '../Controllers/Warden'
import {createAd} from '../Models/KinveyRequester'

export default class EditAdPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            description:'',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
        event.preventDefault();
        createAd(this.state.title,this.state.description).then(createAdSuccess.bind(this)).catch((error)=>{
            let resp = JSON.parse(error.responseText);
            Warden.showInfoOrError('error',resp.description)
        });
        function createAdSuccess(){
            this.context.router.push('/adverts');
            Warden.showInfoOrError('info','Advertisment successfully created.')
        }

    }

    componentWillMount(){
        if(!sessionStorage.getItem('username')){
            this.context.router.push('/');
            Warden.showInfoOrError('error','Login in order to create an advertisment.')
        }
    }

    onChange(event){
        event.preventDefault();
        let newState={};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }
    render() {
        return (
            <EditAdView
                title={this.state.title}
                description={this.state.description}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
            />
        )
    }
}
EditAdPage.contextTypes = {
    router: React.PropTypes.object
};