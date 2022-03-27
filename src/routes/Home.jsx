import Calendar from "../components/Calendar/Calendar";
import Covid from "../components/Covid/Covid";
import Bookmark from "../components/Bookmark/Bookmark";
import MusicPlayer from "../components/Musicplayer/MusicPlayer";
import TodoList from "../components/Todo/TodoList";
import Quote from "../components/Quote/Quote";
import Clock from "../components/Clock/Clock";
import Weather from "../components/Weather/Weather";
import Dday from "../components/Dday/Dday";

function Home() {
  return (
    <section className="home">
      <ul className="home-wrapper">
        <li className="row">
          <Clock />
          <Dday />
          <Weather />
          <Bookmark />
        </li>
        <li className="row">
          <MusicPlayer />
          <div className="box grow">
            <Calendar />
          </div>
          <TodoList />
        </li>
        <li className="row">
          <div className="box grow">
            <Covid />
          </div>
          <Quote className="box" />
        </li>
      </ul>
    </section>
  );
}
export default Home;
