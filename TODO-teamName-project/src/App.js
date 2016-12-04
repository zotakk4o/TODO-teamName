import React, { Component } from 'react';
import './App.css';
import Header from './Views/Header'
import {Link} from 'react-router'
import Warden from './Controllers/Warden'
import {logoutUser} from './Models/KinveyRequester'
import InfoBoxView from './Views/InfoBoxView'
import ErrorBoxView from './Views/ErrorBoxView'

export default class App extends Component {
  constructor(props){
    super(props);
      this.state={
          username:'',
          isLoggedIn:false,
          display:true,
          info:false,
          error:false
      };
      this.showInfoOrError = this.showInfoOrError.bind(this);
      this.checkUserCredentials = this.checkUserCredentials.bind(this);
      this.onLogout = this.onLogout.bind(this);
      this.disappearError = this.disappearError.bind(this);
      this.disappearInfo = this.disappearInfo.bind(this);
  }

  componentWillMount(){
    Warden.sessionUpdate = this.checkUserCredentials;
    Warden.showInfoOrError = this.showInfoOrError;
    this.checkUserCredentials();
  }

  showInfoOrError(type,message){
      if(type === 'info'){
          this.setState({
              info:true,
              error:false,
              message
          })
      }else if (type === 'error'){
          this.setState({
              info:false,
              error:true,
              message
          });
      }
  }
  disappearInfo() {
      let first = setInterval(disapp.bind(this),2000);
      let second = setInterval(appear.bind(this),1550);
      function disapp(){
          this.setState({
              display:false,
          });
      }
      function appear(){
          this.setState({
              display:true,
              info:false,
              error:false
          });
          clearInterval(first);
          clearInterval(second);
      }
  }
  disappearError(){
      this.setState({
          display:false,
      });
      this.setState({
          display:true,
          info:false,
          error:false
      });
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
      this.showInfoOrError('info','Successfully logged out.');
  }

  render() {
    if(this.state.isLoggedIn){
        if(this.state.info){
            return (
                <div className="container">
                    <InfoBoxView message={this.state.message} display={this.state.display} disappear={this.disappearInfo}/>
                    <Header>
                        <Link to="/" className="btn btn-default">Home</Link>
                        <Link to="/adverts" className="btn btn-default">Advertisments</Link>
                        <Link to="/create-advert" className="btn btn-default">Create Advertisment</Link>
                        <Link className="btn btn-default" onClick={this.onLogout}>Logout</Link>
                    </Header>
                    {this.props.children}
                </div>
            );
        }else if(this.state.error){
            return (
                <div className="container">
                    <ErrorBoxView message={this.state.message} display={this.state.display} disappear={this.disappearError}/>
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
                        <Link to="/create-advert" className="btn btn-default">Create Advertisment</Link>
                        <Link className="btn btn-default" onClick={this.onLogout}>Logout</Link>
                    </Header>
                    {this.props.children}
                </div>
            );
        }
    }else{
        if(this.state.info){
            return (
                <div className="container">
                    <InfoBoxView message={this.state.message} display={this.state.display} disappear={this.disappearInfo}/>
                    <Header>
                        <Link to="/" className="btn btn-default">Home</Link>
                        <Link to="/adverts" className="btn btn-default">Advertisments</Link>
                        <Link to="/register" className="btn btn-default">Register</Link>
                        <Link to="/login" className="btn btn-default">Login</Link>
                    </Header>
                    {this.props.children}
                </div>
            );
        }else if (this.state.error){
            return (
                <div className="container">
                    <ErrorBoxView message={this.state.message} display={this.state.display} disappear={this.disappearError}/>
                    <Header>
                        <Link to="/" className="btn btn-default">Home</Link>
                        <Link to="/adverts" className="btn btn-default">Advertisments</Link>
                        <Link to="/register" className="btn btn-default">Register</Link>
                        <Link to="/login" className="btn btn-default">Login</Link>
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
}
App.contextTypes = {
    router: React.PropTypes.object
};