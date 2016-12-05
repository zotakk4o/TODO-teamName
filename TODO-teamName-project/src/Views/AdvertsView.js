import React, { Component } from 'react';
import {Link} from 'react-router';

export default class AdvertsView extends Component {
    cutLongText(text,length=100){
        if(text.length > length)return text.substring(0,length)+'...';
        else return text;
    }
    render() {
        if(sessionStorage.getItem('username') === this.props.author){
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">Author</div>
                    <div className="panel-body">{this.props.author}</div>
                    <div className="panel-heading">Title</div>
                    <div className="panel-body">{this.props.title}</div>
                    <div className="panel-heading">Description</div>
                    <div className="panel-body">{this.cutLongText(this.props.description) || "No description."}</div>
                    <div className="panel-heading">Management</div>
                    <div className="panel-body">
                        <Link to={'/edit/'+this.props.adId} className="btn btn-default">Edit</Link>
                        <Link to={'/delete/'+this.props.adId} className="btn btn-default">Delete</Link>
                        <Link to={'/details/'+this.props.adId} className="btn btn-default">Read whole advert</Link>
                    </div>
                </div>
            );
        }else{
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">Author</div>
                    <div className="panel-body">{this.props.author}</div>
                    <div className="panel-heading">Title</div>
                    <div className="panel-body">{this.props.title}</div>
                    <div className="panel-heading">Description</div>
                    <div className="panel-body">{this.cutLongText(this.props.description) || "No description."}</div>
                    <div className="panel-heading">Management</div>
                    <div className="panel-body">
                        <Link to={'/details/'+this.props.adId} className="btn btn-default">Read whole advert</Link>
                    </div>
                </div>
            );
        }

    }
}