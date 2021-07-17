import React, {useState} from 'react';

const TodoItem = ({todo, onToggle}) => {
    return (
        <div>
            <li style={{textDecoration: todo.done? "line-through":"none"}} onClick={()=>onToggle(todo.id)}>{todo.text}</li>
        </div>
    );
};

function TodoList({todos, onToggle}){
    return(
        <ul>
            {
                todos.map(todo=><TodoItem key={todo.id} todo={todo} onToggle={onToggle}/>)
            }
        </ul>
    )
}

function Todos({todos, onCreate, onToggle}){
    const [text, setText]=useState("");
    const onChange=e=>setText(e.target.value);
    const onSubmit=e=>{
        e.preventDefault();//새로 고침 방지
        onCreate(text);
        setText('');
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} onChange={onChange} placeholder="할 일을 입력하세요"/>
                <button>등록</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle}/>
        </div>
    )
}

export default Todos;