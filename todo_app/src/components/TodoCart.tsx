import styled from "styled-components";
import { TODOS } from "../pages/Homepage";

interface TodoCartProps extends TODOS {
  status: boolean;
}

const TodoCart= ({ sr, title, status, editTodo, deleteTodo}:TodoCartProps) => {
  return (
    <DIV>
      <div className="mainDiv">
        <div className="titleBox">
          <p>{sr}.</p>
          <p>{title}</p>
        </div>
          <p style={{color: status?"green":"red"}}>{status ? "Completed" : "In Process"}</p>
        <div className="editDeleteBTN">
          <button onClick={() => editTodo && editTodo()}>Edit </button>
          <button onClick={() =>  deleteTodo && deleteTodo()}>Delete</button>
        </div>
      </div>
      <hr />
    </DIV>
  );
};

export { TodoCart };


const DIV =styled.div`
  .mainDiv {
    width: 90%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    margin-bottom: 0px;

  }
  .titleBox {
    width: 60%;
    display: flex;
    justify-content: flex-start;
    gap: 50px;
  }
  .editDeleteBTN{
    width: 20%;
    display: flex;
    justify-content: space-around;
  }
  button {
    padding: 10px;
    margin-left:20px
  }
  button:nth-child(2){
    color:white; 
    background-color: red;
  }
  button:nth-child(1){
    color:white; 
    background-color: green;
  }
`