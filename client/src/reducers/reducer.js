
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
        case "INITIALIZE": return {...state, tasks: action.payload}; break;
        case "CLEAR_ALL": return {...state, tasks: []}; break;
        case "ADD": return {...state, tasks: [...state.tasks, {content: action.payload, checked: false, id: (new Date()).getTime()}]}; break;
        case "REMOVE": return {...state, tasks:[...state.tasks.slice(0, action.payload),...state.tasks.slice(action.payload + 1)]}; break;
        case "CHECK": return {...state, tasks:[...state.tasks.slice(0, action.payload),{...state.tasks[action.payload], checked: !state.tasks[action.payload].checked},...state.tasks.slice(action.payload + 1)]}
        default: return state;
    }
}

export default reducer;