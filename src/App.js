import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      todos: []
    };
  }

  changeValue = e => {
    //console.log(event.target.value);
    this.setState({ value: e.target.value })
  }

  saveTodo = () => {
    const todos = this.state.todos;
    todos.push({
      value: this.state.value,
      completed: false
    });
    this.setState({ todos });
    this.clearValue();
  };

  clearValue = () => {
    this.setState({ value: ""});
  };

  deleteTodo = todoIndex => {
    const todos = this.state.todos;
    const newTodos = todos.filter((todo, index) => index !== todoIndex);
    this.setState({ todos: newTodos });
  };

  toggleCompleted = index => {
    const todos = this.state.todos; 
    todos[index].completed = !todos[index].completed;
    this.setState({ todos});
  };

  render() {
    //console.log(this.state);
    return (
      <React.Fragment> 
        <Typography variant="h2" align="center" gutterBottom>
          ToDo App
        </Typography>

        <Grid container justify="center">
          <Grid item>
            <TodoForm 
              value={this.state.value}
              changeValue={this.changeValue}
              saveTodo={this.saveTodo}
            />  
          </Grid>

        </Grid>
        <Grid container justify="center">
          <Grid item md={8}>
            <TodoList 
              todos={this.state.todos}
              deleteTodo={this.deleteTodo}
              toggleCompleted={this.toggleCompleted}
            />  
          </Grid>
        </Grid>
      </React.Fragment> 
    ); 
  }
}

export default App;

