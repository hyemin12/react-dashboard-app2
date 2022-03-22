import Calendar from "../components/Calendar/Calendar";
import Covid from "../components/Covid/Covid";
import Bookmark from "../components/Bookmark/Bookmark";
import MusicPlayer from "../components/Musicplayer/MusicPlayer";
import Quote from "../components/Quote/Quote";
import Clock from "../components/Clock/Clock";
import Weather from "../components/Weather/Weather";
import "./home.css";

function Home() {
  return (
    <section className="home">
      <ul className="home-wrapper">
        <h1>Hello, hyemin</h1>
        <li className="row">
          <Clock />
          <div className="box"></div>
          <Weather />
          <div className="box"></div>
        </li>
        <li className="row">
          <div className="box">
            <MusicPlayer />
          </div>
          <div className="box grow">
            <Calendar />
          </div>
          <div className="box"></div>
        </li>
        <li className="row">
          <div className="box grow"></div>
          <Quote className="box" />
        </li>
      </ul>
    </section>
  );
}
export default Home;
