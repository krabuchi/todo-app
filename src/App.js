import React from 'react';
import data from './data'
import './App.css';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data,
      text: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.change =  this.change.bind(this);
  }
  
  handleChange(e){
    this.setState({text: e.target.value})
  }
  
  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.text.length) {return;}
    
    this.setState(state  => ({
          items: state.items.concat({
            id:Date.now(),
            text: this.state.text,
            checked:false
          }),
          text: ''
        })
    );
    localStorage.setItem('items', this.state.items);
  }
  
  change(id) {
    const upDate = this.state.items.map(item => {
      if(item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    })
    this.setState({items: upDate});
  } 
  
  render() {
    const todoItems = this.state.items.map(item => 
        <TodoList key={item.id} 
          handleChange={this.change} 
          item={item}
        />
      );
    return (
      <div className="container">
        <h3>Todo App</h3>
        <form onSubmit={this.handleSubmit}>
          <input type='text' 
            onChange={this.handleChange} 
            value={this.state.text} 
          />
          <button>+ Add Item</button>
        </form> 
         <div className="ulist">{todoItems}</div>
      </div>
    )
  }
}

 
function TodoList(props) {
  const style = {
    color: "#cdcdcd",
    textDecoration: "line-through"
  }

  return (
    <div className="indiList" style={props.item.checked ? style: null}>
      <input type="checkbox" 
        checked={props.item.checked}
        onChange={() => props.handleChange(props.item.id)}
      />
      <label>{props.item.text}</label>
    </div>
  )
}

export default TodoApp;
