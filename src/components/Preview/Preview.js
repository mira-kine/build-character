import React from 'react';
import Character from '../Character/Character';
import { useState } from 'react';
import Catchphrase from '../Catchphrase/Catchphrase';

import './Preview.css';

export default function Preview() {
  const [head, setHead] = useState('bird-head');
  const [middle, setMiddle] = useState('blue-middle');
  const [bottom, setBottom] = useState('leg-pant');
  const [phrase, setPhrase] = useState('');
  const [phraseList, setPhraseList] = useState([]);

  return (
    <div>
      <Character {...{ head, setHead, middle, setMiddle, bottom, setBottom }} />
      <div className="parts">
        <img alt={head} src={`${process.env.PUBLIC_URL}/assets/${head}.png`} />
        <img alt={middle} src={`${process.env.PUBLIC_URL}/assets/${middle}.png`} />
        <img alt={bottom} src={`${process.env.PUBLIC_URL}/assets/${bottom}.png`} />
      </div>

      <Catchphrase {...{ phrase, setPhrase, phraseList, setPhraseList }} />
      <div className="phrase-list">
        You have called your character:
        {phraseList.map((elem) => (
          <p key={elem}>{elem}</p>
        ))}
      </div>
    </div>
  );
}
