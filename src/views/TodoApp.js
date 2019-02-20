import AddTodo from '../components/AddTodo';
import React from 'react';
import TodoList from '../components/TodoList';
import VisibilityFilter from '../components/VisibilityFilter';

export default function TodoApp(props) {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <VisibilityFilter />
      <TodoList />
    </div>
  );
}
