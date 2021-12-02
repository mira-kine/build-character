import React from 'react';

export default function Catchphrase({ setPhrase, phrase }) {
  const handlePhrase = (e) => {
    setPhrase(e.target.value);
  };
  return (
    <div className="catchphrase">
      <div className="form-control">
        <textarea style={{ height: '250px' }} value={phrase} onInput={handlePhrase}></textarea>
      </div>
    </div>
  );
}
