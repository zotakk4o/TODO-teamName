import React, { Component } from 'react';

export default class AboutView extends Component {
    render() {
        let style = {
          padding: 20,
        };
        return (
            <div classID="about-view" style={style}>
                <div className="panel panel-default" >
                    <div className="panel-heading"><h1>About</h1></div>
                    <div className="panel-body"><p>This is a simple advertisement website. You can post your adverts in the Advertisements tab (but first log in/register). Also if you don't like for some reason your post you can edit it or directly delete it!</p></div>
                </div>
            </div>
        );
    }
}