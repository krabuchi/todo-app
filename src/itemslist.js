import React from 'react';
import TodoList from './todolist';

function ItemsList(props) {
    const todoItems = props.items.map(item => 
        <TodoList key={item.id} 
            handleChange={props.handleChange}
            handleRemove={props.handleRemove}
            item={item}
        />
    );
    return (
    <div className="ulist">{todoItems}</div>
    )
}

export default ItemsList;