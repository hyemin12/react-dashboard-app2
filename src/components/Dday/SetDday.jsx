import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SetDday() {
  const state = useSelector((state) => state.dDayReducer);
  const dispatch = useDispatch();
  const gap = new Date(state.date) - new Date();
  const dDay = Math.floor(gap / (1000 * 60 * 60 * 24));
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  function handleEdit() {
    dispatch({ type: "EDIT_Dday", payload: { title: title, date: date } });
    setIsEdit(false);
  }
  function handleREMOVE() {
    dispatch({ type: "REMOVE_Dday" });
    setIsEdit(false);
  }
  function getText(e) {
    if (e.target.name === "title") {
      console.log(title);
      console.log(e.target.value);
      setTitle(e.target.value);
    } else if (e.target.name === "date") {
      setDate(e.target.value);
    }
  }
  return (
    <>
      {!isEdit && state ? (
        <div className="dDay-user">
          <p>{state.title}</p>
          <h4>
            D-{dDay}
            <div className="btn-group">
              <button onClick={() => setIsEdit(true)}>수정</button>
              <button onClick={handleREMOVE}>삭제</button>
            </div>
          </h4>
        </div>
      ) : (
        <>
          <div className="dDay-input edit">
            <div>
              <input
                name="title"
                type="text"
                defaultValue={state.title}
                onChange={getText}
              />
              <input
                type="date"
                name="date"
                onChange={getText}
                defaultValue={state.date}
              />
            </div>
            <button onClick={handleEdit}>수정하기</button>
          </div>
        </>
      )}
    </>
  );
}
export default SetDday;
