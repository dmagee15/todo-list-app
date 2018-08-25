
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
        case "ADD": return {...state, tasks: [...state.tasks, action.payload]}; break;
        case "REMOVE": return {...state, tasks:[...state.tasks.slice(0, action.payload),...state.tasks.slice(action.payload + 1)]}; break;
        default: return state;
    }
}

export default reducer;