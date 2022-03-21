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
    <section className="music-wrapper">
      <div className="music-container">
        <div className="music-info-wrapper">
          <div className="album-img">
            <img
              src={state[trackIndex].albumimg}
              alt={`${state[trackIndex].artist} - ${state[trackIndex].title}`}
            />
          </div>
          <div className="name-wrapper">
            <h1 className="song-name">{state[trackIndex].title}</h1>
            <p className="artist-name">{state[trackIndex].artist}</p>
          </div>
        </div>
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
