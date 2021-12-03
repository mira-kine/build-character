import React from 'react';
import Preview from '../Preview/Preview';

import './Main.css';

export default function Main() {
  return (
    <main className="background" style={{ backgroundColor: 'white' }}>
      <Preview />
    </main>
  );
}
