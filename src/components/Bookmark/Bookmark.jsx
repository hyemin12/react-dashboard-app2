import { data } from "../../store/data";
import "./bookmark.css";
function Bookmark() {
  const state = data.bookmark;
  return (
    <div className="bookmark">
      <div className="bookmark-wrapper">
        {/* <h4>bookmark</h4> */}
        <ul className="bookmark-list">
          {state.map((site) => {
            return (
              <li key={site.url}>
                <a href={site.url} target="_blank" rel="noreferrer">
                  <img src={site.icon} alt={site.name} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Bookmark;
