import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from './../actions/auth';

class ListPage extends Component{
    constructor(props){
        super(props);
    }
    logoutHandler = () => {
        this.props.dispatch(logOut());
    }
    render(){
        return (
            <div>
                <h1>ListPage</h1>
                <button onClick={this.logoutHandler}>Logout</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
      tasks: state.tasks,
      loggedIn: state.loggedIn
    }
  }

export default connect(mapStateToProps)(ListPage);