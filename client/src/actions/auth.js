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

export function checkUser(config){
    return function(dispatch){
        axios.get('/access',config)
        .then(function(response){
            console.log(response);
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
            console.log(response);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", response.data.user);
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
            console.log(response);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", response.data.user);
            dispatch(logIn(response.data.user));
          }).catch((error)=>{
            console.log(error);
          })
    }
}