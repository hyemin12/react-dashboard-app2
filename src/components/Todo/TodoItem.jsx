import { useState } from "react";
import { FaEdit, FaTrash, FaCheck, FaCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import "./todoitem.css";
function TodoItem(props) {
  const todo = props.todo;
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  function handleEdit() {
    setIsEdit(!isEdit);
    setReadOnly(true);
    dispatch({
      type: "EDIT_TODO",
      payload: { id: todo.id, text: props.todo.value },
    });
  }
  function handleChecked() {
    dispatch({
      type: "checked",
      payload: { isChecked: !todo.isChecked, id: todo.id },
    });
  }
  function handleRemove() {
    dispatch({ type: "REMOVE_TODO", payload: { id: todo.id } });
  }
  return (
    <li className="todo-item">
      <div className="item-wrapper">
        {todo && todo ? (
          <>
            <div className="checked" onClick={handleChecked}>
              <FaCheckCircle />
            </div>
            <textarea
              disabled={!isEdit ? true : false}
              value={todo.text}
              style={{ height: todo.text.length < 16 ? "28px" : "42px" }}
              maxLength={30}
            />
            <div className="btn-group">
              {isEdit ? (
                <button onClick={handleEdit}>
                  <FaCheck />
                </button>
              ) : (
                <>
                  <button onClick={handleEdit}>
                    <FaEdit />
                  </button>
                  <button onClick={handleRemove}>
                    <FaTrash />
                  </button>
                </>
              )}
            </div>
          </>
        ) : null}
      </div>
    </li>
  );
}

export default TodoItem;
