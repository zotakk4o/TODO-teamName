import React, { Component } from 'react';

export default class InfoBoxView extends Component {
    render() {
        if(this.props.display){
            this.props.disappear();
            return (
                <div className="alert alert-success">
                    <strong>{this.props.message}</strong>
                </div>
            );
        }else{
            return null;
        }
    }
}