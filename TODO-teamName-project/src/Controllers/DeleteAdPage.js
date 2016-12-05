import React, { Component } from 'react';
import DeleteAdView from '../Views/DeleteAdView';
import Warden from '../Controllers/Warden'
import {deleteAd,readAd} from '../Models/KinveyRequester'

export default class DeleteAdPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            description:''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
        event.preventDefault();
        deleteAd(this.props.params.adId).then(deleteAdSuccess.bind(this)).catch((error)=>{
            let resp = JSON.parse(error.responseText);
            Warden.showInfoOrError('error',resp.description)
        });
        function deleteAdSuccess(){
            this.context.router.push('/adverts');
            Warden.showInfoOrError('info','Advertisment successfully removed.')
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
            author:response.author,
            title:response.title,
            description:response.description
        });
    }
    componentWillMount(){
        if(!sessionStorage.getItem('username')){
            this.context.router.push('/login');
            Warden.showInfoOrError('error','Login in order to remove an advertisment.')
        }
        else if (sessionStorage.getItem('username') !== this.state.author){
            this.context.router.push('/adverts');
            Warden.showInfoOrError('error','НЕ МИ СЕ ПРАВИ НА ХАКЕР САМО!!')
        }
    }


    render() {
        return (
            <DeleteAdView
                title={this.state.title}
                description={this.state.description}
                onSubmit={this.onSubmit}
            />
        )
    }
}
DeleteAdPage.contextTypes = {
    router: React.PropTypes.object
};