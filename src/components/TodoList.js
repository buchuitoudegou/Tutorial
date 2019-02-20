import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

function getTodoById(state, id) {
  return state.todos ? { ...state.todos.byIds[id], id } : {};
}

const mapStateToProps = (state) => {
  const idList = state.todos ? state.todos.allIds : [];
  const todoList = idList.map(id => getTodoById(state, id));
  return { todos: todoList };
};


function TodoList({ todos }) {
  return (
    <div>
      { todos && todos.length 
        ? todos.map((todo) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />
        }) : "No Todo Item."
      }
    </div>
  )
}

export default connect(mapStateToProps, null)(TodoList);
