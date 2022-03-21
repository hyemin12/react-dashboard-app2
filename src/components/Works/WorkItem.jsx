import { Link } from "react-router-dom";
import "./workitem.css";
function WorkItem(props) {
  const item = props.item;
  return (
    <>
      <li className="works-item">
        <img src={`./img/portfolio/${item.img}.png`} alt={item.title} />
        <div className="item-hover">
          <h4>{item.title}</h4>
          <div className="link-group">
            <Link to={`/works/${item.id}`}>
              <button>상세보기</button>
            </Link>
          </div>
        </div>
      </li>
    </>
  );
}

export default WorkItem;
