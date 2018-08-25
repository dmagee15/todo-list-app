import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logUp } from './../actions/auth';

import usericon from '../icons/usericon.png';
import passicon from '../icons/passicon.png';

class LoadingPage extends Component{
    render(){
        return (
            <div>
                <h1>Loading</h1>
            </div>
        );
    }
}

export default LoadingPage;