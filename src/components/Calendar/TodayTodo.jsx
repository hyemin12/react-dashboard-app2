function TodayTodo(props) {
  const events = props.events.filter((plan) =>
    plan.start.includes("2022-03-21")
  );
  return (
    <div className="today-todo">
      <div className="title">
        <h4>오늘의 일정</h4>
        <button>+</button>
      </div>

      {events !== null
        ? events.map((event) => {
            return <li>{event.subtitle}</li>;
          })
        : null}
    </div>
  );
}
export default TodayTodo;
