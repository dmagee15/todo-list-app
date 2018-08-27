import React, { Component } from 'react';
import './../css/LoginPage.css';
import Signup from './Signup';
import Login from './Login';
import { connect } from 'react-redux';

class LoginPage extends Component {
    state = {
        activeSection: 'login'
    }
    componentDidMount(){
        localStorage.clear();
    }
    loginButtonHandler = () => {
        this.setState({
            activeSection: 'login'
        })
    }
    signupButtonHandler = () => {
        this.setState({
            activeSection: 'signup'
        })
    }
  render() {

    const sectionContent = this.state.activeSection==='login' ? <Login /> : <Signup />;

    return (
        <div className="frontpageBackground">
            <div className="loginmodal">
                <div className="titleSection">
                    <h1>To-Do List</h1>
                </div>
                <div className="loginsignup">
                    <button onClick={this.loginButtonHandler} className={"loginFormButton "+(this.state.activeSection==='login'?"active":"")}>Login</button>
                    <button onClick={this.signupButtonHandler} className={"signupFormButton "+(this.state.activeSection==='signup'?"active":"")}>Sign Up</button>
                </div>
                { sectionContent }
                <div className="emptySpaceFrontpageModal">
                </div>
                <div className="modalFooter">
                    <p>&#169; David Magee</p>
                </div>
            </div>
            <div className="emptySpaceFrontpage">
            </div>
            <div className="frontpageFooter">
                <p>&#169; David Magee</p>
            </div>
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

export default connect(mapStateToProps)(LoginPage);