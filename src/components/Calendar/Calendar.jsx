import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

import { data } from "../../store/data.js";
import TodayTodo from "./TodayTodo.jsx";
import "./calendar.css";

function Calendar() {
  return (
    <div className="calendar-wrapper">
      <div className="fullcalendar">
        <FullCalendar
          nowIndicator
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{ left: "prev", center: "title", right: "next" }}
          contentHeight={"auto"}
          fixedWeekCount={false}
          expandRows={true}
          eventBackgroundColor={"#a6b1e1"}
          eventBorderColor={"#a6b1e1"}
          events={data.events}
        />
      </div>
      <TodayTodo events={data.events} />
    </div>
  );
}
export default Calendar;
