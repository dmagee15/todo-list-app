import axios from 'axios';

export function logIn(user){
    return function(dispatch){
        dispatch({
            type:"LOGGED_IN",
            payload:user
        });
    };    
}

export function logOut(){
    return function(dispatch){
        localStorage.clear();
        dispatch({
            type:"LOGGED_OUT"
        });
    };    
}

export function checkUser(){
    return function(dispatch){
        const config = {
            headers: {'Authorization': "bearer " + localStorage.getItem("token")}
        };
        axios.get('/access',config)
        .then(function(response){
            dispatch(logIn(response.data));
        }).catch(function(err){
            console.log(err);
        });
    } 
}

export function logUp(username, password){
    return function(dispatch){
        axios.post('/login',{
            name:username,
            password:password
          }).then((response)=>{
            localStorage.setItem("token", response.data.token);
            dispatch(logIn(response.data.user));
          }).catch((error)=>{
            console.log(error);
          })
    }
}

export function signUp(username, password, email){
    return function(dispatch){
        axios.post('/signup',{
            name:username,
            password:password,
            email:email
          }).then((response)=>{
            localStorage.setItem("token", response.data.token);
            dispatch(logIn(response.data.user));
          }).catch((error)=>{
            console.log(error);
          })
    }
}