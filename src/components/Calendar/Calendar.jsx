import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

import { data } from "../../store/data.js";
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
          contentHeight={"300px"}
          fixedWeekCount={false}
          expandRows={true}
          eventBackgroundColor={"#a6b1e1"}
          eventBorderColor={"#a6b1e1"}
          events={data.events}
        />
      </div>
    </div>
  );
}
export default Calendar;
