import React from 'react';
import { connect } from 'react-redux';

function getTodoById(state, id) {
  return state.todos ? { ...state.todos.byIds[id], id } : {};
}

const mapStateToProps = (state) => {
  const idList = state.todos ? state.todos.allIds : [];
  const todoList = idList.map(id => getTodoById(state, id));
  return { todos: todoList };
};

// class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  
//   render() {
//     return (
//       <div>
//         { this.props.todos.length }
//       </div>
//     );
//   }
// };

function TodoList(props) {
  return (
    <div>
      { props.todos.length }
    </div>
  )
}

export default connect(mapStateToProps, null)(TodoList);
