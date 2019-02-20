import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions/index';

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: (id) => dispatch(toggleTodo({ id }))
  }
}

function Todo({ todo, toggleTodo }) {
  const completeClass = "todo-item__text--".concat((todo.completed ? "completed" : "waiting"));
  return (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completed ? "👌" : "🚀"}
      <span className={completeClass}>
        {todo.content}
      </span>
    </li>
  );
}

export default connect(null, mapDispatchToProps)(Todo);
