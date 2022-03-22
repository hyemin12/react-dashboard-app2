import { parseClassNames } from "@fullcalendar/common";
import { useState } from "react";
import { FaCaretDown, FaEdit, FaTrash, FaClipboard } from "react-icons/fa";

function TodoItem(props) {
  const todo = props.todo;

  const [isEdit, setIsEdit] = useState(false);
  return (
    <li>
      <p className="plan">{todo.text}</p>
      <p className={`plan-state ${todo.todoState}`}>{todo.todoState}</p>
      <div className="btn-group">
        <button
          className={isEdit ? "close" : "open"}
          onClick={() => {
            setIsEdit(!isEdit);
          }}
        >
          <FaCaretDown />
        </button>
        {isEdit ? (
          <div className="btn-block">
            <button>
              <FaEdit />
            </button>
            <button>
              <FaTrash />
            </button>
            <button>
              <FaClipboard />
            </button>
          </div>
        ) : null}
      </div>
    </li>
  );
}

export default TodoItem;
