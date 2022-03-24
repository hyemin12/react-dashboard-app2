import { data } from "../../store/data";

function SelectDate(props) {
  const date = data.date;
  const monthArr = data.month;
  const dateArr = data.dates;
  const yearArr = data.timeYears;
  const setStartDate = props.setStartDate;
  const setEndDate = props.setEndDate;
  function handleMonth(event) {
    console.log(String(event.target.value).padStart(2, "0"));
    setStartDate({ month: String(event.target.value).padStart(2, "0") });
  }
  function handleDate(event) {
    console.log();
    setStartDate({ date: String(event.target.value).padStart(2, "0") });
  }
  return (
    <div>
      <select defaultValue={date.year}>
        {yearArr.map((year) => {
          return (
            <option key={year} value={year}>
              {year}년
            </option>
          );
        })}
      </select>
      <select onChange={handleMonth} defaultValue={date.month}>
        {monthArr.map((month) => {
          return (
            <option key={month} value={month}>
              {month}월
            </option>
          );
        })}
      </select>
      <select onChange={handleDate} defaultValue={date.date}>
        {dateArr.map((date) => {
          return (
            <option key={date} value={date}>
              {date}일
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default SelectDate;
