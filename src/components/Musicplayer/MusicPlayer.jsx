import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import { data } from "../../store/data";

import "react-h5-audio-player/lib/styles.css";
import "./musicplayer.css";

function MusicPlayer() {
  const state = data.playlist;
  const [trackIndex, setTrackIndex] = useState(0);

  function handlePrev() {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? state.length - 1 : currentTrack - 1
    );
  }
  function handleNext() {
    setTrackIndex((currentTrack) =>
      currentTrack < state.length - 1 ? currentTrack + 1 : 0
    );
  }
  return (
    <section
      className="music-wrapper"
      style={{ backgroundImage: `url(${state[trackIndex].albumimg})` }}
    >
      <div className="overlay"></div>
      <div className={`music-container ${state[trackIndex].mode}`}>
        <h4 className="song-name">{state[trackIndex].title}</h4>
        <p className="artist-name">{state[trackIndex].artist}</p>
        <AudioPlayer
          src={`https://docs.google.com/uc?export=open&id=${state[trackIndex].id}`}
          showSkipControls={true}
          showJumpControls={false}
          onClickPrevious={handlePrev}
          onClickNext={handleNext}
          onEnded={handleNext}
        />
      </div>
    </section>
  );
}

export default MusicPlayer;
