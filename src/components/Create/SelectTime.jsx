import { data } from "../../store/data";

function SelectTime(props) {
  const hoursArr = data.timeHours;
  const minutesArr = data.timeMinutes;
  const setHours = props.setHours;
  const setMinutes = props.setMinutes;
  function handleHours(event) {
    console.log();
    setHours(String(event.target.value).padStart(2, "0"));
  }
  function handleMinutes(event) {
    console.log();
    setMinutes(String(event.target.value).padStart(2, "0"));
  }
  return (
    <div>
      <select onChange={handleHours}>
        {hoursArr.map((hour) => {
          return (
            <option key={hour} value={hour}>
              {String(hour).padStart(2, "0")}시
            </option>
          );
        })}
      </select>
      <select onChange={handleMinutes}>
        {minutesArr.map((date) => {
          return (
            <option key={date} value={date}>
              {date}분
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default SelectTime;
