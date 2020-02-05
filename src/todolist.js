import  React from 'react';
function TodoList(props) {
    const style = {
      color: "#cdcdcd",
      textDecoration: "line-through"
    }
  
    return (
      <div className="indiList">
        <input type="checkbox" 
          checked={props.item.checked}
          onChange={() => props.handleChange(props.item.id)}
        />
        <label style={props.item.checked ? style: null}>{props.item.text}</label>
        <span onClick={() =>props.handleRemove(props.item.id)}>❌</span>
      </div>
    )
  }

  export default TodoList;