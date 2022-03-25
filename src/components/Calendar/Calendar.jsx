import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";

import { useState } from "react";
import { useSelector } from "react-redux";
import EventModal from "./EventModal";
import "./home.Calendar.css";

function Calendar() {
  const events = useSelector((state) => state.eventsReducer);
  const [eModal, setEModal] = useState(false);
  const [event, setEvent] = useState();
  function handleDateClick(e) {
    setEvent(e.event._def);
    setEModal(!eModal);
  }
  return (
    <div className="calendar-wrapper">
      <div className="fullcalendar">
        <FullCalendar
          nowIndicator
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{ left: "prev", center: "title", right: "next" }}
          contentHeight={"300px"}
          fixedWeekCount={false}
          expandRows={true}
          eventBackgroundColor={"#d9fcdb"}
          eventBorderColor={"#d9fcdb"}
          events={events}
          eventClick={handleDateClick}
          eventsDidUpdate={events}
        />
      </div>
      {eModal ? <EventModal setEModal={setEModal} event={event} /> : null}
    </div>
  );
}
export default Calendar;
