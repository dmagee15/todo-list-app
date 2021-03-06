
var initialState = {
    user: null,
    tasks: [],
    loggedIn: false,
    loaded: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGGED_IN": return {...state, user: action.payload.username, tasks: action.payload.tasks, loggedIn: true, loaded: true};
        case "LOGGED_OUT": return {...state, user: null, tasks: [], loggedIn: false};
        case "INITIALIZE": return {...state, tasks: action.payload};
        case "CLEAR_ALL": return {...state, tasks: []};
        case "ADD": return {...state, tasks: [...state.tasks, {content: action.payload, checked: false, id: (new Date()).getTime()}]};
        case "REMOVE": return {...state, tasks:[...state.tasks.slice(0, action.payload),...state.tasks.slice(action.payload + 1)]};
        case "CHECK": return {...state, tasks:[...state.tasks.slice(0, action.payload),{...state.tasks[action.payload], checked: !state.tasks[action.payload].checked},...state.tasks.slice(action.payload + 1)]};
        default: return state;
    }
}

export default reducer;