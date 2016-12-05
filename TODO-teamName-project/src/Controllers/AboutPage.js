import React, { Component } from 'react';
import AboutView from '../Views/AboutView';

export default class AboutPage extends Component {
    constructor(props){

        super(props);

        this.state = {
            title:'About us',
            description: "This is a simple advertisement website. You can post your adverts in the Advertisements tab (but first log in/register). Also if you don't like for some reason your post you can edit it or directly delete it!",
            contributors: ['IcoPico', 'zotakk', 'pepo930'],
            contributions: 'Some contributions, i don\'t know',
            partners: "SoftUni"

        };
    }
    render() {
        return (

            <AboutView

                title={this.state.title}
                overview={this.state.description}
                contributors={this.state.contributors}
                contributions={this.state.contributions}
                partners={this.state.partners}


            />
        );
    }
}