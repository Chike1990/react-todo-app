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

  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
  }

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  render() {
    return (
      <div>
        <Header />
        <TodoList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;