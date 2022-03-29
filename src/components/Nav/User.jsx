import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

function User() {
  return (
    <div className="user">
      <div className="user-img">
        <img
          src="https://github.com/hyemin12/gomin-talk-app/blob/master/public/assets/profile.jpg?raw=true"
          alt=""
        ></img>
      </div>
      <div className="user-name">
        <p>Hyemin</p>
        <Link to="/about">
          <FaAngleDown className="btn-user" />
        </Link>
      </div>
    </div>
  );
}
export default User;
