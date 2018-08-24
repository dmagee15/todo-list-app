import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { checkUser } from './actions/auth.js';
import LoginPage from './components/LoginPage';
import ListPage from './components/ListPage';

class App extends Component {
  state = {loggedIn: false};

  constructor(props){
    super(props);
    const config = {
      headers: {'Authorization': "bearer " + "3323423f32f32f23f"}
    };
    this.props.dispatch(checkUser(config));
  }
  componentDidMount() {
    
  }

  render() {
    let display = (this.state.loggedIn) ? <ListPage /> : <LoginPage />;
    return (
      <div className="App">
        { display }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
