
var initialState = {
    user: null,
    tasks: [],
    loggedIn: false,
    loaded: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGGED_IN": return {...state, user: action.payload.username, tasks: action.payload.tasks, loggedIn: true, loaded: true}; break;
        case "LOGGED_OUT": return {...state, user: null, tasks: [], loggedIn: false}; break;
        default: return state;
    }
}

export default reducer;