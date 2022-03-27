import { useState } from "react";
import { useDispatch } from "react-redux";
function NullDday(props) {
  const dispatch = useDispatch();
  const [createDday, setCreateDday] = useState(false);
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  function handleCreate() {
    dispatch({ type: "CREATE_Dday", payload: { title: title, date: date } });
    setCreateDday(false);
  }
  function getText(e) {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "date") {
      setDate(e.target.value);
    }
  }

  return (
    <>
      {!createDday ? (
        <div className="dDay-null">
          <button
            onClick={() => {
              setCreateDday(true);
            }}
          >
            D-day 추가
          </button>
        </div>
      ) : (
        <div className="dDay-input create">
          <div>
            <input
              name="title"
              placeholder="타이틀을 작성하세요"
              type="text"
              onChange={getText}
            />
            <input type="date" name="date" onChange={getText} />
          </div>
          <button onClick={handleCreate}>작성완료</button>
        </div>
      )}
    </>
  );
}
export default NullDday;
