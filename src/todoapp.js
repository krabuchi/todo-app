import React from 'react';
import ItemsList from './itemslist';

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        text: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.change =  this.change.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
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
    
    handleRemove(id) {
      const remainder = this.state.items.filter(item => {
        if(item.id !== id) return item;
      });
      this.setState({items: remainder});
    }
  
    render() {
      
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
          <ItemsList items={this.state.items} handleChange={this.change} handleRemove={this.handleRemove}/>
        </div>
      )
    }
  }

  export default TodoApp;