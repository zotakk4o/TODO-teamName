import React, { Component } from 'react';
import CreateAdvertView from '../Views/CreateAdvertView';
import Warden from '../Controllers/Warden'
import {createAd} from '../Models/KinveyRequester'

export default class CreateAdvertPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            description:'',
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
        createAd(this.state.title,this.state.description).then(createAdSuccess.bind(this)).catch((error)=>{
            let resp = JSON.parse(error.responseText);
            Warden.showInfoOrError('error',resp.description);
            this.setState({
                inpDisabled:false
            });
        });
        function createAdSuccess(){
            this.setState({
                inpDisabled:false
            });
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
            <CreateAdvertView
                title={this.state.title}
                description={this.state.description}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                disabled={this.state.inpDisabled}
            />
        )
    }
}
CreateAdvertPage.contextTypes = {
    router: React.PropTypes.object
};