import React from 'react';
import Preview from '../Preview/Preview';

import './Main.css';

export default function Main(head, middle, bottom, phrase) {
  return (
    <main className="background" style={{ backgroundColor: 'blue' }}>
      <Preview {...{ head, middle, bottom, phrase }} />
    </main>
  );
}
