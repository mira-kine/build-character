import React from 'react';
import Preview from '../Preview/Preview';
import bg from '../../bg.jpg';

import './Main.css';

export default function Main(head, middle, bottom, phrase) {
  return (
    <main className="background" style={{ backgroundImage: `url(${bg})` }}>
      <Preview {...{ head, middle, bottom, phrase }} />
    </main>
  );
}
