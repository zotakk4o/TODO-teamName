import React, { Component } from 'react';
import EditAdView from '../Views/EditAdView';
import Warden from '../Controllers/Warden'
import {updateAd,readAd} from '../Models/KinveyRequester'

export default class EditAdPage extends Component {
    constructor(props){
        super(props);
        let href = window.location.href;
        let id = href.split('/');
        id = id[id.length -1];
        //alert(window.location.href);
        let goofyTitle = '';
        let goofyDesc = '';

        readAd(id).then(function (content) {
            goofyTitle = content.title;
            goofyDesc = content.description;
        }).catch(function (err) {
            console.log(err)
        });
        this.state = {
            title: goofyTitle,
            description: goofyDesc
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
        event.preventDefault();
        updateAd(this.state.title,this.state.description,this.props.params.adId).then(updateAdSuccess.bind(this)).catch((error)=>{
            let resp = JSON.parse(error.responseText);
            Warden.showInfoOrError('error',resp.description)
        });
        function updateAdSuccess(){
            this.context.router.push('/adverts');
            Warden.showInfoOrError('info','Advertisment successfully edited.')
        }

    }
    componentDidMount(){
        readAd(this.props.params.adId).then(this.readAdSuccess.bind(this)).catch((error)=>{
            let resp = JSON.parse(error.responseText);
            Warden.showInfoOrError('error',resp.description)
        });
    }
    readAdSuccess(response){
        this.setState({
            title:response.title,
            description:response.description
        });
    }

    componentWillMount(){
        if(!sessionStorage.getItem('username')){
            this.context.router.push('/adverts');
            Warden.showInfoOrError('error','Login in order to edit an advertisment.')
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