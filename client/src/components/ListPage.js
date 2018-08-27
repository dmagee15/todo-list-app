import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from './../actions/auth';
import { Add, Remove, Check, ClearAll, Update, Initialize } from './../actions/list';
import { checkUser } from './../actions/auth';
import { getDate } from './../utility/date';
import './../css/ListPage.css';

class ListPage extends Component{
    state = {
        addInput: ""
    }
    constructor(props){
        super(props);
        if(!this.props.user&&this.props.loggedIn===false){
            this.props.dispatch(checkUser());
        }else{
            this.props.dispatch(Initialize());
        }
    }
    componentDidUpdate(prevProps) {
        let tasks = this.props.tasks.slice();
        let user = this.props.user;
        if(JSON.stringify(prevProps.tasks)!==JSON.stringify(tasks)){
            this.props.dispatch(Update(tasks, user));
        }
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
    checkHandler = (event, index) => {
        this.props.dispatch(Check(index));
    }
    clearAllHandler = () => {
        this.props.dispatch(ClearAll());
    }
    render(){

        let numTasksToDo = 0;
        let clearAllButton = null;
        if(this.props.tasks.length>0){
            clearAllButton = (
                <div className="clearButtonContainer">
                        <button className="clearAllButton" onClick={this.clearAllHandler}>Clear All</button>
                    </div>
            );
        }
        let tasks = this.props.tasks.map((task, index) => {
            if(!task.checked){
                numTasksToDo++;
            }
            return (
                <div className={"task "+((task.checked)?"inactive":"")} key={task.id}>
                        <div className="taskContentSection">
                            <p className="taskContent">{task.content}</p>
                        </div>
                        <div className="buttonSection">
                            <button className="deleteButton" onClick={()=>{this.removeHandler(index)}}>X</button>
                            <input type="checkbox" onChange={(event)=>{this.checkHandler(event, index)}} checked={task.checked} />
                        </div>
                    </div>
            );
        });

        return (
            <div className="listPageContainer">
                <div className="headerSection">
                    <div className="leftHeaderSection">
                        <div className="dateContainer">
                            <h1 className="date">{getDate()}</h1>
                        </div>
                        <div className="numTasksContainer">
                            <h2 className="numTasks">You have {numTasksToDo} tasks to do.</h2>
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

                    {tasks}
                    {clearAllButton}

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