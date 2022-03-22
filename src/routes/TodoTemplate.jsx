import { useState } from "react";
import { useSelector } from "react-redux";
import { data } from "../store/data";
import "../components/Todo/todotemplate.css";
import TodoItem from "../components/Todo/TodoItem";

function TodoTemplate() {
  let todos = useSelector((state) => state.todoReducer);
  const ingTodos = todos.filter((todo) => todo.isChecked === false);
  const doneTodos = todos.filter((done) => done.isChecked === true);
  console.log(ingTodos);
  console.log(doneTodos);
  return (
    <div className="todo-wrapper">
      <div className="todo-title">
        <h1>할일을 작성하고, 시간을 효율적으로 관리하세요.</h1>
      </div>
      <div className="on-todo todo-row">
        <h4>할일 목록</h4>
        <p className="stock">
          <span>{todos.length}개</span> 남았습니다.
        </p>
        <ul className="todo-list">
          {ingTodos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
      <div className="complete-todo todo-row">
        <h4>완료된 목록</h4>
        <ul className="todo-list">
          {doneTodos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
    </div>
  );
}
export default TodoTemplate;
