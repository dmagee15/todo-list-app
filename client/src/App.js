import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { checkUser } from './actions/auth.js';
import LoginPage from './components/LoginPage';
import ListPage from './components/ListPage';
import LoadingPage from './components/LoadingPage';

class App extends Component {

  constructor(props){
    super(props);
    const config = {
      headers: {'Authorization': "bearer " + localStorage.getItem("token")}
    };
    this.props.dispatch(checkUser(config));
  }
  componentDidMount() {
  }

  render() {
  let display = ((localStorage.getItem("user")) ? <ListPage /> : <LoginPage />);

    return (
      <div className="App">
        { display }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    tasks: state.tasks,
    loggedIn: state.loggedIn,
    loaded: state.loaded
  }
}

export default connect(mapStateToProps)(App);
