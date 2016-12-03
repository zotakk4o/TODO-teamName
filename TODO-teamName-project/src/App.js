import React, { Component } from 'react';
import './App.css';
import Header from './Views/Header'
import {Link} from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header>
          <Link to="/" className="btn btn-default">Home</Link>
          <Link to="/adverts" className="btn btn-default">Advertisments</Link>
          <Link to="/register" className="btn btn-default">Register</Link>
          <Link to="/login" className="btn btn-default">Login</Link>
        </Header>
          {this.props.children}
      </div>
    );
  }
}
