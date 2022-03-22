import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./clock.css";

function Clock() {
  let state = useSelector((state) => state.timeReducer);
  let dispatch = useDispatch();
  useEffect(() => {
    const timeId = setInterval(() => {
      dispatch({ type: "시간가져오기" });
    }, 20000);
    return () => clearInterval(timeId);
  }, []);
  return (
    <section className="clock-wrapper">
      <div className="title">
        <h4>Today is </h4>
      </div>
      <p>{state}</p>
    </section>
  );
}

export default Clock;
