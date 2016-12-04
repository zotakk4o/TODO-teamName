import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {IndexRoute,Router, Route, browserHistory} from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AdvertsPage from './Controllers/AdvertsPage';
import LoginPage from './Controllers/LoginPage';
import RegisterPage from './Controllers/RegisterPage';
import HomePage from './Controllers/HomePage';
import CreateAdvertPage from './Controllers/CreateAdvertPage';
import DeleteAdPage from './Controllers/DeleteAdPage'
import EditAdPage from './Controllers/EditAdPage'
import DetailsPage from './Controllers/DetailsPage'

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={HomePage}/>
          <Route path='home' component={HomePage}/>
          <Route path="adverts" component={AdvertsPage}/>
          <Route path="register" component={RegisterPage}/>
          <Route path="login" component={LoginPage}/>
          <Route path="create-advert" component={CreateAdvertPage}/>
          <Route path="edit/:adId" component={EditAdPage}/>
          <Route path="delete/:adId" component={DeleteAdPage}/>
          <Route path="details/:adId" component={DetailsPage}/>
      </Route>
  </Router>,
    document.getElementById('root')
);
