import * as actionTypes from './actionTypes'

export const getInputChangeAction = (value) => ({
    type: actionTypes.CHANGE_INPUT_VALUE,
    value
})

export const getDeleteTodoAction = (index) => ({
    type: actionTypes.DELETE_TODO_ITEM,
    index
})

export const getSaveTodoAction = () => ({
    type: actionTypes.ADD_TODO_ITEM
})

