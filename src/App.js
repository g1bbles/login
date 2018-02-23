import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import { getUser } from './github';

const renderLine = (user, key) => <li key={key}><b>{key}</b>: {user[key]}</li>

class App extends Component {
    constructor (props) {
        super(props);
        this.state = { user: {} , value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        getUser('g1bbles').then(data => {
            this.setState({ user: data.entity })
        })
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('github user requested: ' + this.state.value);

        console.log(this.state.value);
        getUser(this.state.value).then(data => {
            this.setState({ user: data.entity })
        })
    }

    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { user } = this.state;
        const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">James React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >Home
            </Button>
              <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'form')}
              >Form
              </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >Log Out
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                      id="qsLogoutBtn"
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.logout.bind(this)}
                  >Contact
                  </Button>
              )
            }
          </Navbar.Header>
        </Navbar>

          <ul style={{ listStyle: 'none' }}>
              {
                  // Loop over the object keys and render each key
                  Object.keys(user).map(key => renderLine(user, key))
              }
          </ul>

          <form onSubmit={this.handleSubmit}>
              <label>
                  Name:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

export default App;
