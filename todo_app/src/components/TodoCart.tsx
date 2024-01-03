import { TODOS } from "../pages/Homepage";

const TodoCart:React.FC<TODOS>  = ({ id, title, description, status, editTodo, deleteTodo}) => {
  return (
    <>
      <div>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Status: {status ? "Completed" : "Incomplete"}</p>
        <button onClick={() => editTodo && editTodo()}>Edit </button>
        <button onClick={() =>  deleteTodo && deleteTodo()}>Delete</button>
      </div>
    </>
  );
};

export { TodoCart };
