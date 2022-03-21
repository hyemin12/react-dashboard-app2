import Calendar from "../components/Calendar/Calendar";
import MusicPlayer from "../components/Musicplayer/MusicPlayer";
import Clock from "../components/Clock/Clock";
import Covid from "../components/Covid/Covid";
import Quote from "../components/Quote/Quote";

function Home() {
  return (
    <section className="home">
      <Calendar />
      <div className="home-wrapper">
        <Clock />
        <Covid />
        <MusicPlayer />
        <Quote />
      </div>
    </section>
  );
}
export default Home;
