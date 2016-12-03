import React, { Component } from 'react';
import './App.css';
import Header from './Views/Header'
import {Link} from 'react-router'
import Warden from './Controllers/Warden'
import {logoutUser} from './Models/KinveyRequester'


export default class App extends Component {
  constructor(props){
    super(props);
      this.state={
          username:'',
          isLoggedIn:false
      };
      this.checkUserCredentials = this.checkUserCredentials.bind(this);
      this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount(){
    Warden.sessionUpdate = this.checkUserCredentials;
    this.checkUserCredentials();
  }


  checkUserCredentials(){
    let username = sessionStorage.getItem('username');
    if(username){
      this.setState({
          isLoggedIn:true,
          username
      })
    }else{
      this.setState({
          isLoggedIn:false,
          username:''
      })
    }
  }

  onLogout(){
    logoutUser().then(logoutSuccess.bind(this)).catch((error)=>console.log(error));
    function logoutSuccess(){
        sessionStorage.clear();
        this.checkUserCredentials();
        this.context.router.push('/');
    }
  }

  render() {
    if(this.state.isLoggedIn){
        return (
            <div className="container">
              <Header>
                <Link to="/" className="btn btn-default">Home</Link>
                <Link to="/adverts" className="btn btn-default">Advertisments</Link>
                <Link to="/create-advert" className="btn btn-default">Create Advertisment</Link>
                <Link className="btn btn-default" onClick={this.onLogout}>Logout</Link>
              </Header>
                {this.props.children}
            </div>
        );
    }else{
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
}
App.contextTypes = {
    router: React.PropTypes.object
};