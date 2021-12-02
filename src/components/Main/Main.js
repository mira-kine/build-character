import React from 'react';
import { useState } from 'react';
import Character from '../Character/Character';
import Preview from '../Preview/Preview';
import Catchphrase from '../Catchphrase/Catchphrase';
import bg from '../../bg.jpg';
import './Main.css';
// import Counter from './components/Counter/Counter';

export default function Main() {
  const [head, setHead] = useState('bird-head');
  const [middle, setMiddle] = useState('blue-middle');
  const [bottom, setBottom] = useState('leg-pants');
  const [phrase, setPhrase] = useState('catch phraaaase');
  //   const [headCount, setHeadCount] = useState(0);
  //   const [middleCount, setMiddleCount] = useState(0);
  //   const [bottomCount, setBottomCount] = useState(0);

  return (
    <main className="background" style={{ backgroundImage: `url(${bg})` }}>
      <Character {...{ head, setHead, middle, setMiddle, bottom, setBottom, phrase, setPhrase }} />
      <Preview />
      <Catchphrase />
    </main>
  );
}
