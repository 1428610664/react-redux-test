import { combineReducers } from 'redux'
import { reducer as todo } from '../components/todoList/store'

const reducer =  combineReducers({
    todo
})

export default reducer