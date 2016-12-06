import React, { Component } from 'react';
import {Link} from 'react-router';
import './DetailsView.css'



export default class DetailsView extends Component {
    render() {
        if(sessionStorage.getItem('username') === this.props.author){

            return (

                <div className="panel panel-viewAd">

                    <div className="panel-heading bg-primary">Author</div>
                    <div className="panel-body">{this.props.author}</div>
                    <div className="panel-heading bg-primary">Title</div>
                    <div className="panel-body">{this.props.title}</div>
                    <div className="panel-heading bg-primary">Description</div>
                    <div className="panel-body detailsDivs">{this.props.description || "No description."}</div>
                    <div className="panel-heading bg-primary">Management</div>
                    <div className="panel-body">

                        <Link to={'/edit/'+this.props.adId} className="btn btn-default">Edit</Link>
                        <Link to={'/delete/'+this.props.adId} className="btn btn-default">Delete</Link>
                        <Link to='/adverts' className="btn btn-default">Back to adverts</Link>

                    </div>

                </div>

            );

        }else if(sessionStorage.getItem('username')){

            return (

                <div className="panel panel-viewAd">

                    <div className="panel-heading bg-primary">Author</div>
                    <div className="panel-body">{this.props.author}</div>
                    <div className="panel-heading bg-primary">Title</div>
                    <div className="panel-body">{this.props.title}</div>
                    <div className="panel-heading bg-primary">Description</div>
                    <div className="panel-body detailsDivs">{this.props.description || "No description."}</div>
                    <div className="panel-heading bg-primary">Management</div>
                    <div className="panel-body">

                        <Link to='/adverts' className="btn btn-default">Back to adverts</Link>

                    </div>

                </div>
            );
        }else{
            return (
                <div className="panel panel-viewAd">

                    <div className="panel-body">

                        <Link to='/adverts' className="btn btn-default">Back to adverts</Link>

                    </div>
                </div>
            );
        }
    }
}