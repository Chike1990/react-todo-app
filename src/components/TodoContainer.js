import Header from "./Header";
import React from "react";
import TodoList from "./TodoList"
class TodoContainer extends React.Component {
  state = {
    todos: [{
      id: 1,
      title: "Set up the shared state (props)",
      completed: true
    },
    {
      id: 2,
      title: "Watch match",
      completed: false
    },
    {
      id: 3,
      title: "Sleep",
      completed: false
    }
    ]
  };
  render() {
    return (
      <div>
        <Header />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoContainer;