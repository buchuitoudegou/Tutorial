import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from './typings';

let nextId = 0;

export function addTodo({ content }) {
  return {
    type: ADD_TODO,
    payload: {
      id: ++ nextId,
      content
    }
  };
}

export function toggleTodo({ id }) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  };
}

export function setFilter({ filter }) {
  return {
    type: SET_FILTER,
    payload: {
      filter
    }
  };
}
