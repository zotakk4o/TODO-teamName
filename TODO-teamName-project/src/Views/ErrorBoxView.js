import React, { Component } from 'react';

export default class ErrorBoxView extends Component {
    render() {
        if(this.props.display){
            this.props.disappear();
            return (
                <div className="alert alert-danger">
                    <strong>{this.props.message}</strong>
                </div>
            );
        }else{
            return null;
        }
    }
}