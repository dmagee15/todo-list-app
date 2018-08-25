
export function Add(content){
    return {
        type: 'ADD',
        payload: content
    }
}

export function Remove(index){
    return {
        type: 'REMOVE',
        payload: index
    }
}