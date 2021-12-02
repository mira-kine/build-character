import React from 'react';
import './Character.css';

export default function Character({
  head,
  setHead,
  middle,
  setMiddle,
  bottom,
  setBottom,
  setHeadCount,
  setMiddleCount,
  setBottomCount,
}) {
  const handleHead = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };

  const handleMiddle = (e) => {
    setMiddle(e.target.value);
    setMiddleCount((prevState) => prevState + 1);
  };

  const handleBottom = (e) => {
    setBottom(e.target.value);
    setBottomCount((prevState) => prevState + 1);
  };

  return (
    <div className="character-editor">
      <div className="form-control">
        <select value={head} onChange={handleHead}>
          <option value="bird-head">bird</option>
          <option value="duck-head">duck</option>
          <option value="dog-head">dog</option>
          <option value="horse-head">horse</option>
        </select>
      </div>
      <div className="form-control">
        <select value={middle} onChange={handleMiddle}>
          <option value="blue-middle">blue</option>
          <option value="dress-middle">dress</option>
          <option value="pink-middle">pink</option>
          <option value="red-middle">red</option>
        </select>
      </div>
      <div className="form-control">
        <select value={bottom} onChange={handleBottom}>
          <option value="blue-pants">blue pants</option>
          <option value="dog-pants">dog pants</option>
          <option value="leg-pants">leg pants</option>
          <option value="white-pants">white pants</option>
        </select>
      </div>
    </div>
  );
}
