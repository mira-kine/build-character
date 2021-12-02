import React from 'react';
import './Character.css';

export default function Character({ head, setHead, middle, setMiddle, bottom, setBottom }) {
  return (
    <div className="character-editor">
      <div className="form-control">
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="bird-head">bird</option>
          <option value="duck-head">duck</option>
          <option value="dog-head">dog</option>
          <option value="horse-head">horse</option>
        </select>
      </div>
      <div className="form-control">
        <select value={middle} onChange={(e) => setMiddle(e.target.value)}>
          <option value="blue-middle">blue</option>
          <option value="dress-middle">dress</option>
          <option value="pink-middle">pink</option>
          <option value="red-middle">red</option>
        </select>
      </div>
      <div className="form-control">
        <select value={bottom} onChange={(e) => setBottom(e.target.value)}>
          <option value="blue-pants">blue pants</option>
          <option value="dog-pants">dog pants</option>
          <option value="leg-pants">leg pants</option>
          <option value="white-pants">white pants</option>
        </select>
      </div>

      <div className="parts">
        <img alt={head} src={`${process.env.PUBLIC_URL}/assets/${head}.png`} />
        <img alt={middle} src={`${process.env.PUBLIC_URL}/assets/${middle}.png`} />
        <img alt={bottom} src={`${process.env.PUBLIC_URL}/assets/${bottom}.png`} />
      </div>
    </div>
  );
}
