import React from 'react';

export default function Preview({ head, middle, bottom }) {
  return (
    <div className="character">
      <img alt={head} src={`${process.env.PUBLIC_URL}/assets/${head}.png`}></img>
    </div>
  );
}
