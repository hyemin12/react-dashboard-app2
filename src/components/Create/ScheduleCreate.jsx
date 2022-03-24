import { useState } from "react";
import { useDispatch } from "react-redux";
import SelectDate from "./SelectDate";
import SelectTime from "./SelectTime";
import "./createModule.css";
// {
//   id: 0,
//   title: "배구",
//   subtitle: "IBK기업은행vs인삼공사",
//   start: "2022-03-20T16:00:00",
//   end: "2022-03-20T18:00:00",
// },
function ScheduleCreate(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [subtitle, setSubTitle] = useState();
  const [startDate, setStartDate] = useState({ year: "", month: "", date: "" });
  const [endDate, setEndDate] = useState({ year: "", month: "", date: "" });
  const [startTime, setStartTime] = useState({ hour: "", minutes: "" });
  const [endTime, setEndTime] = useState({ hour: "", minutes: "" });
  const setIsModal = props.setIsModal;
  function handleAdd() {
    dispatch({
      type: "ADD_EVENT",
      payload: {
        id: new Date().getUTCMilliseconds(),
        title,
        subtitle,
        start: `${startDate.year}-${startDate.month}-${startDate.date}T${startTime.hour}:${startTime.minutes}:00`,
        end: `${endDate.year}-${endDate.month}-${endDate.date}T${endTime.hour}:${endTime.minutes}:00`,
      },
    });
  }
  function getText(e) {
    if (e.target.className === "title") {
      setTitle(e.target.value);
    } else {
      setSubTitle(e.target.value);
    }
  }
  return (
    <div className="add-create-wrapper">
      <div>
        <ul className="add-content">
          <li className="create-input">
            <span>일정 제목</span>
            <input
              type="text"
              className="title"
              value={title}
              onChange={getText}
            />
          </li>
          <li className="create-input">
            <span>일정 내용</span>
            <input
              type="text"
              className="subtitle"
              value={subtitle}
              onChange={getText}
            />
          </li>
          <li className="event-date">
            <div>
              <span>시작일</span>
              <div className="start create-date">
                <SelectDate setStartDate={setStartDate} />
                <SelectTime setStartTime={setStartTime} />
              </div>
            </div>
            <div>
              <span>종료일</span>
              <div className="end create-date">
                <SelectDate setEndDate={setEndDate} />
                <SelectTime setEndTime={setEndTime} />
              </div>
            </div>
          </li>
          <li className="btn-group">
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
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ScheduleCreate;
