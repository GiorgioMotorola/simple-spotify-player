import React from 'react';

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }

  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: 'pointer' }}
      onClick={handlePlay}
    >
      <img
        className="img"
        src={track.albumUrl}
        style={{ height: '64px', width: '64px' }}
      />
      <div className="track-list">
        <div>{track.title}</div>
        <div className="track-artist">{track.artist}</div>
        <div className="album-name">{track.album}</div>
        <div>{track.genre}</div>
      </div>
    </div>
  );
}
