import { useState } from "react";
import { TodoCart } from "../components/TodoCart";

import "../App.css"
import Modal from "../components/Modal";
import styled from "styled-components";

export type TODOS = {
    title: string;
    description: string;
    status: boolean;
    id: number;
    editTodo: void
};

const Homepage = () => {
    const [todos, setTodos] = useState<TODOS[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);



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

    return (
        <DIV>
            <div>
                <h1>Home Page</h1>
                <button onClick={openModal}>Create new Todo</button>
                <div>
                    {todos?.length > 0 &&
                        todos?.map((item, i) => (
                            <TodoCart {...item} key={i} editTodo={editTodo(1)} />
                        ))
                    }
                </div>
            </div>
            <div>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className="ModalBox">
                        <h3>Create New Task</h3>
                        <form>
                            <input type="text"  placeholder="Enter Title"  required/>
                            <input type="text" placeholder="Enter Description" required/>
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
    }
   
`