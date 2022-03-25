import { useState } from "react";
import { useDispatch } from "react-redux";

function TodoCreate(props) {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  const setIsModal = props.setIsModal;
  const [date, setDate] = useState();
  function handleAdd() {
    if (todoText !== "") {
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: new Date().getUTCMilliseconds(),
          text: todoText,
          date: date,
        },
      });
      setIsModal(false);
    } else {
      alert("할일 내용을 입력해주세요.");
    }
  }
  function getTodo(e) {
    switch (e.target.className) {
      case "todoText":
        return setTodoText(e.target.value);
      case "date todo-date":
        return setDate(e.target.value);
      default:
        break;
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
                className="todoText"
                onChange={getTodo}
              />
            </div>
            <span>Date: </span>
            <div className="create-date">
              <input
                type="date"
                className="date todo-date"
                onChange={getTodo}
              />
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
