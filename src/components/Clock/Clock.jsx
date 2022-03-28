import { useEffect, useState } from "react";
import "./clock.css";

function Clock() {
  const state = new Date();
  const h = state.getHours();
  const ampm = h < 12 ? "AM" : "PM";
  const minutes = String(state.getMinutes()).padStart(2, "0");
  const today = `${h > 13 ? `${h - 12}` : `${h}`} : ${minutes} ${ampm}`;
  const [time, setTime] = useState();
  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date());
    }, 30000);
    return () => clearInterval(timeId);
  }, []);
  return (
    <div className="clock-wrapper">
      <div className="title">
        <h4>what time is it?</h4>
      </div>
      <p>{today}</p>
    </div>
  );
}

export default Clock;
