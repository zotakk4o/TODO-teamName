import React, { Component } from 'react';

export default class InfoBoxView extends Component {
    render() {
        if(this.props.display){
            return (
                <div className="alert alert-success" onClick={this.props.disappear}>
                    <strong>{this.props.message}</strong>
                </div>
            );
        }else{
            return null;
        }
    }
}