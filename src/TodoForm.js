import React from "react";
import TextField from '@material-ui/core/TextField';

const TodoForm = (props) => { 
    const { value, saveTodo, changeValue } = props;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          saveTodo();
        }}
      >
        <TextField 
          type="text" 
          placeholder="Start typing..." 
          margin="normal" 
          onChange={changeValue}
          value={value}
        />
      </form> 
    );
  };  
  
  export default TodoForm;
