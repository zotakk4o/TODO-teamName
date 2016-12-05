import React, { Component } from 'react';
import './App.css';
import Header from './Views/Header'
import {Link} from 'react-router'
import Warden from './Controllers/Warden'
import {logoutUser} from './Models/KinveyRequester'
import InfoBoxView from './Views/InfoBoxView'
import ErrorBoxView from './Views/ErrorBoxView'
import Footer from './Views/Footer'


export default class App extends Component {
  constructor(props){
    super(props);
      this.state={
          username:'',
          isLoggedIn:false,
          display:true,
          info:false,
          error:false,
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
          });
      }else if (type === 'error'){
          this.setState({
              info:false,
              error:true,
              message
          });
      }
  }

  disappearInfo() {
      let first = setInterval(disapp.bind(this),1500);
      let second = setInterval(appear.bind(this),1520);
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

  check(){
      if(this.state.info){
         return <InfoBoxView display={this.state.display} disappear={this.disappearInfo} message={this.state.message}/>
      }else if (this.state.error){
          return <ErrorBoxView display={this.state.display} disappear={this.disappearError} message={this.state.message}/>
      }
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
    logoutUser().then(logoutSuccess.bind(this)).catch((error)=>{
        let resp = JSON.parse(error.responseText);
        Warden.showInfoOrError('error',resp.description)
    });
    function logoutSuccess(){
        sessionStorage.clear();
        this.checkUserCredentials();
        this.context.router.push('/');
        this.showInfoOrError('info','Successfully logged out.');
    }

  }

  render() {
      if (this.state.isLoggedIn) {
          return (
              <div className="container">
                  <Header>
                      <Link to="/" className="btn btn-default">Home</Link>
                      <Link to="/adverts" className="btn btn-default">Advertisments</Link>
                      <Link to="/create-advert" className="btn btn-default">Create Advertisment</Link>
                      <Link className="btn btn-default" onClick={this.onLogout}>Logout</Link>
                      <Link to="/about" className="btn btn-default">About</Link>
                  </Header>
                  {this.check()}
                  {this.props.children}
                  <Footer/>
              </div>
          );
      }
      else {

          return (
              <div className="container">
                  <Header>
                      <Link to="/" className="btn btn-default">Home</Link>
                      <Link to="/register" className="btn btn-default">Register</Link>
                      <Link to="/login" className="btn btn-default">Login</Link>
                      <Link to="/about" className="btn btn-default">About</Link>
                  </Header>
                  {this.check()}
                  {this.props.children}
                  <Footer/>
              </div>
          );

      }
  }
}
App.contextTypes = {
    router: React.PropTypes.object
};