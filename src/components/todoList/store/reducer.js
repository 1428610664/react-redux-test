import * as actionTypes from './actionTypes'

let defalutState = {
    inputValue: '',
    todoList: []
}

const todo = (state = defalutState, action) => {
    if (action.type === actionTypes.CHANGE_INPUT_VALUE) {
        return {...state, inputValue: action.value}
    } else if (action.type === actionTypes.ADD_TODO_ITEM) {
        if (!state.inputValue.trim()) {
            return state
        }
        const newState = {...state}
        newState.todoList.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    } else if (action.type === actionTypes.DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.todoList.splice(action.index, 1)
        return newState
    }
    return state
}

export default todo