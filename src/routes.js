import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Contact from './contact';
import Form from './form';
import HelloWorld from './helloWorld';
import Register from './register';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
            <Route path="/" render={(props) => <App auth={auth} {...props} />} />
            <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
            <Route path="/helloWorld" render={(props) => <HelloWorld auth={auth} {...props} />} />
            <Route path="/form" render={(props) => <Form auth={auth} {...props} />} />
            <Route path="/contact" render={(props) => <Contact auth={auth} {...props} />} />
            <Route path="/register" render={(props) => <Register auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
