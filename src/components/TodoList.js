import React from 'react';
import Todo from './Todo';
import { VISIBILITY_FILTER } from '../redux/actions/typings';
import { connect } from 'react-redux';

function getTodoById(state, id) {
  return state.todos ? { ...state.todos.byIds[id], id } : {};
}

const mapStateToProps = (state) => {
  const idList = state.todos ? state.todos.allIds : [];
  const todoList = idList.map(id => getTodoById(state, id));
  const activeFilter = state.visibilityFilter;
  let targetList = [];
  if (activeFilter === VISIBILITY_FILTER.COMPLETED) {
    targetList = todoList.filter(x => x.completed);
  } else if (activeFilter === VISIBILITY_FILTER.WAITING) {
    targetList = todoList.filter(x => !x.completed);
  } else {
    targetList = todoList;
  }
  return { todos: targetList };
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
  );
}

export default connect(mapStateToProps, null)(TodoList);
