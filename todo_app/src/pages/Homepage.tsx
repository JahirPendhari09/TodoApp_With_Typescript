import { useEffect, useRef, useState } from "react";
import { TodoCart } from "../components/TodoCart";

import "../App.css"
import Modal from "../components/Modal";
import styled from "styled-components";

export type TODOS = {
    title: string;
    description: string;
    status: boolean;
    id: number;
    editTodo?: () => void; 
    deleteTodo?: () => void; 
};

const Homepage = () => {
    const [todos, setTodos] = useState<TODOS[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const titleRef= useRef<HTMLInputElement>(null);
    const descriptionRef= useRef<HTMLInputElement>(null)

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const openModal = () => {
        setIsModalOpen(true);
    };

    const editTodo = (id: number) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, status: !todo.status } : todo
        );

        setTodos(updatedTodos);
        
    };
    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter((todo) =>{
            return todo.id !== id 
        });

        setTodos(updatedTodos);
        
    };

    const submitNewTodo=(e: any)=>{
        e.preventDefault();
        
        const newTodo:TODOS = {
            title:titleRef.current?.value||'',
            description : descriptionRef.current?.value||'',
            id:todos.length+1,
            status:false,
            
        }
        const updatedTodo:TODOS[] =  [...todos, newTodo ];
        setTodos(updatedTodo);
        setIsModalOpen(false)
    }

    console.log(todos)
    return (
        <DIV>
            <div>
                <h1>Home Page</h1>
                <button onClick={openModal}>Create new Todo</button>
                <div>
                    {todos?.length > 0 &&
                        todos?.map((item, i) => (
                            <TodoCart 
                               id={item.id}
                               title={item.title}
                               description={item.description}
                               status={item.status}
                               editTodo={() => editTodo(item.id)}
                               deleteTodo={() => deleteTodo(item.id)}
                            />
                        ))
                    }
                </div>
            </div>
            <div>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className="ModalBox">
                        <h3>Create New Task</h3>
                        <form onSubmit={submitNewTodo} >
                            <input type="text"  placeholder="Enter Title"  ref={titleRef} required/>
                            <input type="text" placeholder="Enter Description" ref={descriptionRef} required/>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </Modal>
            </div>
        </DIV>
    );
};

export { Homepage };

const DIV = styled.div`
    
    form{
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: auto;
    }
    input {
        padding: 7px;
        margin-bottom:10px;
        border-radius:5px
    }
    input:nth-child(3) {
        color:white;
        background-color: green;
        border: 1px solid green;
        cursor: pointer;
    }
   
`