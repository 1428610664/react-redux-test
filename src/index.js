import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import TodoList from './TodoList'

import 'antd/dist/antd.css'

ReactDOM.render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById('root')
)
