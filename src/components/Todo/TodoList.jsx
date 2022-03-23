import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
function TodoList() {
  let state = useSelector((state) => state.todoReducer);
  const todos = state.filter((todo) => todo.isChecked === false);
  return (
    <div className="todo-list">
      <div className="todo-list-wrapper">
        <p>오늘의 할일</p>
        <ul>
          {todos.map((todo) => {
            return <TodoItem todo={todo} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default TodoList;
