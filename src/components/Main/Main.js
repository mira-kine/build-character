import React from 'react';
import Preview from '../Preview/Preview';
// import Catchphrase from '../Catchphrase/Catchphrase';
import bg from '../../bg.jpg';
// import Counter from './components/Counter/Counter';

import './Main.css';

export default function Main(head, middle, bottom, phrase) {
  return (
    <main className="background" style={{ backgroundImage: `url(${bg})` }}>
      {/* <Catchphrase /> */}
      <Preview {...{ head, middle, bottom, phrase }} />
    </main>
  );
}
