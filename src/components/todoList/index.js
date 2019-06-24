import React from 'react'
import {Input, Button, List} from 'antd'
import { connect } from 'react-redux'
import { actionCreators } from './store'


const TodoList = (props) => {
    const {inputValue, todoList, handleInputChange, handleSaveTodo, handleDeleteTodo} = props
    return (
        <div className="App" style={{margin: '10px auto', width: '420px'}}>
            <div style={{display: 'flex'}}>
                <Input
                    value={inputValue}
                    placeholder='todo info...'
                    style={{flex: '1', marginRight: '8px'}}
                    onChange={handleInputChange}
                />
                <Button type="primary" onClick={handleSaveTodo}>提交</Button>
            </div>
            <List
                style={{marginTop: '8px'}}
                bordered
                dataSource={todoList}
                renderItem={(item, index) => (<List.Item onClick={() => handleDeleteTodo(index)}>{item}</List.Item>)}
            />
        </div>
    )
}
/*class TodoList extends Component {

    render() {
        let {inputValue, todoList, handleInputChange, handleSaveTodo, handleDeleteTodo} = this.props
        return (
            <div className="App" style={{margin: '10px auto', width: '420px'}}>
                <div style={{display: 'flex'}}>
                    <Input
                        value={inputValue}
                        placeholder='todo info...'
                        style={{flex: '1', marginRight: '8px'}}
                        onChange={handleInputChange}
                    />
                    <Button type="primary" onClick={handleSaveTodo}>提交</Button>
                </div>
                <List
                    style={{marginTop: '8px'}}
                    bordered
                    dataSource={todoList}
                    renderItem={(item, index) => (<List.Item onClick={() => handleDeleteTodo(index)}>{item}</List.Item>)}
                />
            </div>
        )
    }
}*/

const mapStateToProps = state => ({
    inputValue: state.todo.inputValue,
    todoList: state.todo.todoList
});

const mapDispatchToProps = dispatch => ({
    handleSaveTodo: () => dispatch(actionCreators.getSaveTodoAction()),
    handleDeleteTodo: (index) => dispatch(actionCreators.getDeleteTodoAction(index)),
    handleInputChange: (e) => dispatch(actionCreators.getInputChangeAction(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
