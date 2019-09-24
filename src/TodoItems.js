import React from 'react'
import './style.css'

class TodoItems extends React.Component{

    createTasks = (item) => {
        return <li key = {item.id}>
                <div style = {{
                    textDecoration: item.checked ? 'line-through' : 'none',}}
                     onClick={()=>{
                         this.props.checkItem(item.id)}}>
                    <h4>{item.text}</h4>
                </div>
            <button className='deleteBtn' onClick={()=>{
                this.props.deleteItem(item.id)}}> Delete
            </button>
        </li>
    };

    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);

        return <ul>{listItems}</ul>
    }
}

export default TodoItems;