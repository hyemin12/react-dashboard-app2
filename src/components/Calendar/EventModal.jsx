import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./eventModal.css";

function EventModal(props) {
  const events = useSelector((state) => state.eventsReducer);
  const event = events.filter((event) => event.title === props.event.title);
  const dispatch = useDispatch(false);
  const [readOnly, setReadOnly] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  function handleRemove() {
    dispatch({ type: "REMOVE_EVENT", payload: { id: event[0].id } });
    props.setEModal(false);
  }
  function handleEdit(e) {
    console.log(e.target);
    if (e.target.className === "editMode") {
      setIsEdit(true);
      setReadOnly(false);
    } else if (e.target.className === "edit") {
      dispatch({
        type: "EDIT_EVENT",
        payload: { id: event[0].id, title: "", subtitle: "" },
      });
      setIsEdit(false);
      setReadOnly(true);
    }
  }
  return (
    <div className="events-modal">
      <div className="events-modal-wrapper">
        {event && event ? (
          <>
            <span className="caption">{event[0].title}</span>
            <div className="event-modal-text">
              <input
                readOnly={readOnly ? true : false}
                defaultValue={event[0].subtitle}
              />
              <p>
                일시 :
                <input
                  type="date"
                  readOnly={readOnly ? true : false}
                  defaultValue={event[0].start.slice(0, 10)}
                />
                <input
                  type="time"
                  readOnly={readOnly ? true : false}
                  className={readOnly ? "readonly" : null}
                  defaultValue={event[0].start.slice(11, 16)}
                />
              </p>
            </div>
            <div className="btn-group">
              {isEdit ? (
                <button className="edit" onClick={handleEdit}>
                  수정완료
                </button>
              ) : (
                <>
                  <button className="editMode" onClick={handleEdit}>
                    수정
                  </button>
                  <button onClick={handleRemove}>삭제</button>
                </>
              )}
              <button
                className="btn-close"
                onClick={() => {
                  props.setEModal(false);
                }}
              >
                X
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
export default EventModal;
