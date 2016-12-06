
import React, { Component } from 'react';
import HomeView from '../Views/HomeView';
import {listAds} from '../Models/KinveyRequester'

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.state = {
            ad:[]
        }
    }
    componentWillMount(){
        listAds().then(this.onLoadSuccess);
    }
    onLoadSuccess(response){
        let arr = response;
        arr.sort((a,b)=>a['date'] < b['date']);
        this.setState({ad:arr});
    }
    render() {
        return (
            <HomeView ad={this.state.ad}/>
        );
    }
}
