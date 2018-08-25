import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from './../actions/auth';
import { Add, Remove } from './../actions/list';
import './../css/ListPage.css';

class ListPage extends Component{
    state = {
        addinput: ""
    }
    constructor(props){
        super(props);
    }
    logoutHandler = () => {
        this.props.dispatch(logOut());
    }
    changeInputHandler = (event) => {
        this.setState({
            addInput: event.target.value
        });
    }
    addHandler = () => {
        this.props.dispatch(Add(this.state.addInput));
        this.setState({
            addInput: ""
        });
    }
    removeHandler = (index) => {
        this.props.dispatch(Remove(index));
    }
    render(){
        let tasks = this.props.tasks.map((task, index) => {
            return (
                <div className="task">
                        <div className="taskContentSection">
                            <p className="taskContent">{task}</p>
                        </div>
                        <div className="buttonSection">
                            <button className="deleteButton" onClick={()=>{this.removeHandler(index)}}>X</button>
                            <input type="checkbox" />
                        </div>
                    </div>
            );
        });
        return (
            <div className="listPageContainer">
                <div className="headerSection">
                    <div className="leftHeaderSection">
                        <div className="dateContainer">
                            <h1 className="date">Wednesday, 1 June</h1>
                        </div>
                        <div className="numTasksContainer">
                            <h2 className="numTasks">You have 3 tasks to do.</h2>
                        </div>
                    </div>
                    <div className="rightHeaderSection">
                        <button className="logoutButton" onClick={this.logoutHandler}>Logout</button>
                    </div>
                </div>
                <div className="taskSection">
                    <div className="buttonContainer">
                        <input type="text" placeholder="New task ..." onChange={this.changeInputHandler} value={this.state.addInput}/>
                        <button onClick={this.addHandler}>Add</button>
                    </div>
                    <div className="task">
                        <div className="taskContentSection">
                            <p className="taskContent">Have to wsdfsdfssfdfdssdfsdf sdfsdfsdfssfdf sdfsdfsdfsd sdfsdfsdfs sdfsdfsdfdsash the dishes.</p>
                        </div>
                        <div className="buttonSection">
                            <button className="deleteButton">X</button>
                            <input type="checkbox" />
                        </div>
                    </div>
                    {tasks}

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

export default connect(mapStateToProps)(ListPage);