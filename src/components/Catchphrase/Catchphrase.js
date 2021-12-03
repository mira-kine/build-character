import React from 'react';
import './Catchphrase.css';

export default function Catchphrase({ phrase, setPhrase, setPhraseList }) {
  const handleClick = () => {
    setPhraseList((prevState) => [...prevState, phrase]);
    setPhrase('');
  };
  return (
    <div className="catchphrase">
      <div className="phrase-form-control">
        <input
          type="text"
          style={{ height: '100px' }}
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
        />
      </div>
      <button onClick={handleClick}>Save</button>
    </div>
  );
}
