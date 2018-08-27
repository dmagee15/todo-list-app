import React, { Component } from 'react';
import { signUp } from './../actions/auth';
import { connect } from 'react-redux';

import usericon from '../icons/usericon.png';
import passicon from '../icons/passicon.png';
import emailicon from '../icons/emailicon.png';

class Signup extends Component{
    state = {
        username: "",
        password: "",
        email: ""
    }
    submitSignup = (event) => {
        event.preventDefault();
        if(this.state.username!==""&&this.state.password!==""&&this.state.email!==""){
            this.props.dispatch(signUp(this.state.username, this.state.password, this.state.email));
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
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }
    render(){
        return (
            <div>
                <form onSubmit={(event)=>this.submitSignup(event)}>
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
                    <div>
                        <div className="iconContainer">
                            <img src={emailicon} alt=""/>
                        </div>
                        <input placeholder="Email" type="text" onChange={this.handleEmailChange} value={this.state.email}/>
                    </div>
                    <div className="loginButtonContainer">
                        <button className="loginButton">Sign Up</button>
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

export default connect(mapStateToProps)(Signup);