import { useSelector } from "react-redux";
import NullDday from "./NullDday";
import SetDday from "./SetDday";
import "./dday.css";
function Dday() {
  const state = useSelector((state) => state.dDayReducer);
  return (
    <div className="dDay">
      <div className="dDay-wrapper">
        {state === null ? <NullDday /> : <SetDday />}
      </div>
    </div>
  );
}

export default Dday;
