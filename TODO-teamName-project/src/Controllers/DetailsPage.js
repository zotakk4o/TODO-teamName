import React, { Component } from 'react';
import DetailsView from '../Views/DetailsView';
import {readAd} from '../Models/KinveyRequester'


export default class DetailsPage extends Component {
    constructor(props){
        super(props);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.state = {
            ad:[]
        }
    }
    componentDidMount(){
        console.log(this.props.params.adId);
        readAd(this.props.params.adId).then(this.onLoadSuccess);
    }
    onLoadSuccess(response){
        this.setState({
            ad:response
        });
    }
    render() {
        return (
            <DetailsView author={this.state.ad.author} title={this.state.ad.title} description={this.state.ad.description} adId={this.state.ad._id}/>
        )
    }
}
DetailsPage.contextTypes = {
    router: React.PropTypes.object
};