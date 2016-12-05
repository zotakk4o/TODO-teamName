import React, { Component } from 'react';
import AdvertsView from '../Views/AdvertsView';
import {listAds} from '../Models/KinveyRequester'
import Warden from '../Controllers/Warden'

export default class AdvertsPage extends Component {
    constructor(props){
        super(props);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.state = {
            ad:[]
        }
    }
    componentWillMount(){
        if(!sessionStorage.getItem('username')){
            this.context.router.push('/');
            Warden.showInfoOrError('error','Login in order to see the advertisments.')
        }
        listAds().then(this.onLoadSuccess);
    }
    onLoadSuccess(response){
        this.setState({
            ad:response
        });
    }
    render(){
        return (
            <div>
                <h1>Latest Ads:</h1>
                {this.state.ad.map((a,i)=>{
                    return <AdvertsView key={i} author={a.author} title={a.title}  description={a.description} adId={a._id}/>
                })}
            </div>
        );
    }
}
AdvertsPage.contextTypes = {
    router: React.PropTypes.object
};