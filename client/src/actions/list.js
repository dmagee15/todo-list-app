import { config } from './../utility/headerConfig';
import axios from 'axios';

export function Add(content){
    return function(dispatch){
        dispatch({
            type: 'ADD',
            payload: content
        });
    }
    
}

export function Remove(index){
    return function(dispatch){
        dispatch({
            type: 'REMOVE',
            payload: index
        });
    }
}

export function ClearAll(index){
    return function(dispatch){
        dispatch({
            type: 'CLEAR_ALL',
            payload: index
        });
    }
}

export function Check(index){
    return function(dispatch){
        dispatch({
            type: 'CHECK',
            payload: index
        });
    }
    
}

export function Initialize(usertasks){
        return function(dispatch){
            dispatch({
                type: 'INITIALIZE',
                payload: usertasks        
            });
        }
}

export function Update(tasks){
    return function(dispatch){
        axios.post('/update', tasks, config)
        .then(function(response){
        }).catch(function(err){
            console.log(err);
        });
    }
    
}