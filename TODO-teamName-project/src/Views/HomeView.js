import React, { Component } from 'react';
import AdvertsView from '../Views/AdvertsView';

export default class HomeView extends Component {
    render(){
        return (
            <div>
                <h1>Latest Ads:</h1>
                {this.props.ad.map((a,i)=>{
                    if (i < 4){
                        return <AdvertsView key={i} author={a.author} title={a.title}  description={a.description} adId={a._id}/>
                    }
                    else{
                        return null
                    }
                })}
            </div>
        );
    }
}
