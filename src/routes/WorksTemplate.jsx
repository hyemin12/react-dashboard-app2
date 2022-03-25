import { useSelector, useDispatch } from "react-redux";
import "../components/Works/works.css";
import WorkItem from "../components/Works/WorkItem";

function WorksTemplate() {
  const state = useSelector((state) => state.worksReducer);
  const dispatch = useDispatch();
  function handleFilter(event) {
    const name = event.target.innerText;
    if (name) {
      dispatch({ type: name });
    }
  }
  return (
    <>
      <div className="works-wrapper">
        <ul className="filter">
          <li onClick={handleFilter}>
            <span>All</span>
          </li>
          <li onClick={handleFilter}>
            <span>React</span>
          </li>
          <li onClick={handleFilter}>
            <span>Vanilla JS</span>
          </li>
          <li onClick={handleFilter}>
            <span>jQuery</span>
          </li>
          <li onClick={handleFilter}>
            <span>ect</span>
          </li>
        </ul>
        <div className="works-list-wrapper">
          <ul className="works-list">
            {state &&
              state.map((item) => {
                return <WorkItem item={item} key={item.id} />;
              })}
          </ul>
        </div>
      </div>
    </>
  );
}
export default WorksTemplate;
