import React from 'react';

export default function Catchphrase({ phrase, setPhrase, setPhraseList }) {
  const handleClick = () => {
    setPhraseList((prevState) => [...prevState, phrase]);
    setPhrase('');
  };
  return (
    <div className="catchphrase">
      <div className="form-control">
        <input
          type="text"
          style={{ height: '250px' }}
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
        />
      </div>
      <button onClick={handleClick}>Save</button>
    </div>
  );
}
