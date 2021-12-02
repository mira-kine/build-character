import React from 'react';
import { useState } from 'react';
import Character from '../Character/Character';
import Catchphrase from '../Catchphrase/Catchphrase';
// import Counter from './components/Counter/Counter';
import Preview from '../Preview/Preview';

export default function Main() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');
  const [phrase, setPhrase] = useState('');
  //   const [headCount, setHeadCount] = useState(0);
  //   const [middleCount, setMiddleCount] = useState(0);
  //   const [bottomCount, setBottomCount] = useState(0);

  return (
    <main className="main">
      <Character {...{ head, setHead, middle, setMiddle, bottom, setBottom }} />
      <Catchphrase {...{ phrase, setPhrase }} />
      <Preview />
    </main>
  );
}
