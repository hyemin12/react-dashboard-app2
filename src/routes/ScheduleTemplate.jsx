import { useState } from "react";
import { useSelector } from "react-redux";
import { data } from "../store/data";
import Calendar from "../components/Calendar/Calendar";
import TodoItem from "../components/Todo/TodoItem";
import ScheduleItem from "../components/Calendar/ScheduleItem";
import CreateModal from "../components/Create/CreateModal";
import "../components/Todo/todotemplate.css";
import "../components/Calendar/schedule.Calendar.css";

function TodoTemplate() {
  const m = String(new Date().getMonth() + 1).padStart(2, "0");
  let todos = useSelector((state) => state.todoReducer);
  const ingTodos = todos.filter((todo) => todo.isChecked === false);
  const events = data.events.filter((event) => event.start.includes(m));
  const [isModal, setIsModal] = useState();

  return (
    <div className="schedule">
      <div className="schedule-wrapper">
        <Calendar />
        <div className="schedule-list">
          <div className="list-top">
            <p>
              <span>3월 21일</span>월요일
            </p>
          </div>
          <div className="list-bottom">
            <div className="planning">
              <h4>{m}월 일정</h4>
              <ul>
                {events.map((event) => {
                  return <ScheduleItem key={event.id} event={event} />;
                })}
              </ul>
            </div>
            <div className="planning">
              <h4>할일 목록</h4>
              <ul>
                {ingTodos.map((todo) => {
                  return <TodoItem key={todo.id} todo={todo} />;
                })}
              </ul>
            </div>
            <button
              onClick={() => {
                setIsModal(!isModal);
              }}
            >
              + Add
            </button>
          </div>
        </div>
        {isModal ? <CreateModal setIsModal={setIsModal} /> : null}
      </div>
    </div>
  );
}
export default TodoTemplate;
