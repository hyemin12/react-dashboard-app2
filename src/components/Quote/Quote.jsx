import { data } from "../../store/data.js";
import "./quote.css";
function Quote() {
  const state = data.quote;
  const random = Math.floor(Math.random() * state.length);
  return (
    <div className="quote">
      <div
        className="quote-wrapper"
        style={{ backgroundImage: `url(./img/quote/${state[random].bgi}.jpg)` }}
      >
        <div className="opacity"></div>
        <div className="quote">
          <h4>{state[random].quote}</h4>
          <p>-{state[random].author}-</p>
        </div>
      </div>
    </div>
  );
}
export default Quote;
