import { TODOS } from "../pages/Homepage";

const TodoCart = ({ id, title, description, status }: TODOS, { EditTodo }: any) => {
  return (
    <>
      <div>
        <h1>Single Todo</h1>
        <p>ID: {id}</p>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Status: {status ? "Completed" : "Incomplete"}</p>
        <button onClick={() => EditTodo(id)}>Edit Todo</button>
      </div>
    </>
  );
};

export { TodoCart };
