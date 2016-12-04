import React, { Component } from 'react';

export default class ErrorBoxView extends Component {
    render() {
        if(this.props.display){
            return (
                <div className="alert alert-danger" onClick={this.props.disappear}>
                    <strong>{this.props.message}</strong>
                </div>
            );
        }else{
            return null;
        }
    }
}