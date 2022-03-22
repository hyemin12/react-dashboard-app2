import Calendar from "../components/Calendar/Calendar";
import Covid from "../components/Covid/Covid";
import Bookmark from "../components/Bookmark/Bookmark";
import MusicPlayer from "../components/Musicplayer/MusicPlayer";
import Quote from "../components/Quote/Quote";
import Clock from "../components/Clock/Clock";
import Weather from "../components/Weather/Weather";

function Home() {
  return (
    <section className="home">
      <Calendar />
      <div className="home-wrapper">
        <div>
          <Covid />
          <Bookmark />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <Clock />
          <Weather />
          <MusicPlayer />
          <Quote />
        </div>
      </div>
    </section>
  );
}
export default Home;
