import { useState } from "react";
import { useDispatch } from "react-redux";

function ScheduleCreate(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [subtitle, setSubTitle] = useState();
  const [startDate, setStartDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endDate, setEndDate] = useState();
  const [endTime, setEndTime] = useState();
  const setIsModal = props.setIsModal;
  function handleAdd() {
    console.log(title, subtitle, startDate, startTime, endDate, endTime);
    dispatch({
      type: "ADD_EVENT",
      payload: {
        id: new Date().getUTCMilliseconds(),
        title: title,
        subtitle: subtitle,
        start: `${startDate}T${startTime}:00`,
        end: `${endDate}T${endTime}:00`,
      },
    });
    setIsModal(false);
  }
  function getData(e) {
    switch (e.target.className) {
      case "title":
        return setTitle(e.target.value);
      case "subtitle":
        return setSubTitle(e.target.value);
      case "date start":
        console.log(e.target.value);
        return setStartDate(e.target.value);
      case "date end":
        return setEndDate(e.target.value);
      case "start time":
        console.log(e.target.value);
        return setStartTime(e.target.value);
      case "end time":
        console.log(e.target.value);
        return setEndTime(e.target.value);
      case "":
        return alert("내용을 입력하세요");
      default:
        break;
    }
  }
  return (
    <div className="add-create-wrapper">
      <div>
        <ul className="add-content">
          <li className="create-input">
            <span>일정 제목</span>
            <input type="text" className="title" onChange={getData} />
          </li>
          <li className="create-input">
            <span>일정 내용</span>
            <input type="text" className="subtitle" onChange={getData} />
          </li>
          <li className="create-date">
            <div>
              <span>시작일</span>
              <div className="start ">
                <input type="date" className="date start" onChange={getData} />
                <input type="time" className="start time" onChange={getData} />
              </div>
            </div>
            <div>
              <span>종료일</span>
              <div className="end">
                <input type="date" className="date end" onChange={getData} />
                <input type="time" className="end time" onChange={getData} />
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
