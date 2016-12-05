import React, { Component } from 'react';
import './AboutView.css';

export default class AboutView extends Component {
    render() {
        let style = {

          padding: 20,

        };
        return (
            <div classID="about-view" style={style}>

                <div className="panel panel-default" >

                    <div className="panel-heading"><h1>{this.props.title}</h1></div>
                    <div className="panel-body"><p>{this.props.overview}</p></div>
                    <div className="panel-heading"><h2>Contributors</h2></div>
                    <div className="panel-body"><p>{this.props.contributors.join(', ')}</p></div>

                </div>

            </div>
        );
    }
}