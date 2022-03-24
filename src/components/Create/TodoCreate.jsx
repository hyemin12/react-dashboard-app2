import { useState } from "react";
import { useDispatch } from "react-redux";
import SelectDate from "./SelectDate";
import "./createModule.css";

function TodoCreate(props) {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  const [startDate, setStartDate] = useState({ year: "", month: "", date: "" });
  const setIsModal = props.setIsModal;
  console.log(startDate);
  function handleAdd() {
    if (todoText !== "") {
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: new Date().getUTCMilliseconds(),
          text: todoText,
          date: `${startDate.month}월 ${startDate.date}일`,
        },
      });
      setIsModal(false);
    } else {
      alert("할일 내용을 입력해주세요.");
    }
  }

  return (
    <div className="add-create-wrapper">
      <div>
        <div className="add-content">
          <div className="create-value">
            <div className="create-input">
              <span>할일내용</span>
              <input
                type="text"
                name="todoText"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
              />
            </div>
            <span>Date: </span>
            <div className="create-date">
              <SelectDate setStartDate={setStartDate} />
            </div>
          </div>

          <button className="btn-add" onClick={handleAdd}>
            확인
          </button>
          <button
            onClick={() => {
              setIsModal(false);
            }}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoCreate;
