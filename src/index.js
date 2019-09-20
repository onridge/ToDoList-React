import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {toDoList : []};
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const value = (event.target.elements.todoitem.value);
        this.setState(({toDoList}) => ({
            toDoList : toDoList.concat(value)
        }))
    };

    render() {
        const {toDoList} = this.state;
        return (
            <div>
                <h1>Что нужно сделать?</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className='inputText'
                        type = 'text'
                        name = 'todoitem'
                    />
                    <button className='btnSbm' type='submit'> Отправить </button>
                </form>
                <div>
                    <h2>Список задач: </h2>
                    {toDoList.map(i => <ToDoItem item = {i}/>)}
                </div>
            </div>

        )
    }
}

class ToDoItem extends React.Component{

    render(){
        const {item} = this.props;
        return (
            <div>
                <ul>
                    <li>
                        {item}
                        <button name = 'remove'> Удалить </button>
                    </li>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
        <App />,
        document.getElementById('root')
);
