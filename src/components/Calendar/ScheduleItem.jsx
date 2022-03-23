import "./scheduleItem.css";
function ScheduleItem(props) {
  const event = props.event;
  return (
    <li className="schedule-item">
      <div className="item-wrapper">
        <span>{event.start.slice(5, 10)}</span>
        <div className="text-wrapper">
          <h4>{event.title}</h4>
          <p>{event.subtitle}</p>
        </div>
      </div>
    </li>
  );
}
export default ScheduleItem;
