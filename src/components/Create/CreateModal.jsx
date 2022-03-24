import { useState } from "react";
import TodoCreate from "./TodoCreate";
import ScheduleCreate from "./ScheduleCreate";
import "./createModal.css";

function CreateModal(props) {
  const [mode, setMode] = useState(0);
  const setIsModal = props.setIsModal;
  console.log(setIsModal);
  return (
    <div className="add-wrapper">
      <div className="add-container">
        <ul className="add-title-tab">
          <li
            className={mode === 0 ? "active" : null}
            onClick={() => {
              setMode(0);
            }}
          >
            캘린더 일정 추가
          </li>
          <li
            className={mode === 1 ? "active" : null}
            onClick={() => {
              setMode(1);
            }}
          >
            Todo list 추가
          </li>
        </ul>
        {mode === 0 ? (
          <ScheduleCreate setIsModal={setIsModal} />
        ) : (
          <TodoCreate setIsModal={setIsModal} />
        )}
      </div>
    </div>
  );
}

export default CreateModal;
