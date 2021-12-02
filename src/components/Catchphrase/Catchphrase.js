import React from 'react';

export default function Catchphrase({ phrase }) {
  return (
    <div className="catchphrase">
      <div className="form-control">
        <input type="text" style={{ height: '250px' }} value={phrase} />
      </div>
    </div>
  );
}
