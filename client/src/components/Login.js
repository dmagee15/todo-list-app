import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logUp } from './../actions/auth';

import usericon from '../icons/usericon.png';
import passicon from '../icons/passicon.png';

class Login extends Component{
    state = {
        username: "",
        password: ""
    }
    submitLogin = (event) => {
        event.preventDefault();
        if(this.state.username!==""&&this.state.password!==""){
            this.props.dispatch(logUp(this.state.username, this.state.password));
            this.setState({username: "",password: "",email:""});
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }
    render(){
        return (
            <div>
                <form onSubmit={(event)=>this.submitLogin(event)}>
                    <div>
                        <div className="iconContainer">
                            <img src={usericon} alt=""/>
                        </div>
                        <input placeholder="Username" type="text" onChange={this.handleUsernameChange} value={this.state.username}/>
                    </div>
                    <div>
                        <div className="iconContainer">
                            <img src={passicon} alt=""/>
                        </div>
                        <input placeholder="Password" type="text" onChange={this.handlePasswordChange} value={this.state.password}/>
                    </div>
                    <div className="loginButtonContainer">
                        <button className="loginButton">Login</button>
                    </div>
                </form>
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

export default connect(mapStateToProps)(Login);