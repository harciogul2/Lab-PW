import { useState } from 'react';

function QuickNote() {
  const [note, setNote] = useState('');

  return (
    <div className="section-card">
      <h3>nota rapida</h3>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="scrie ceva..."
      />
      <div className={`quicknote-preview ${note === '' ? 'empty' : ''}`}>
        {note === '' ? 'previzualizarea apare aici...' : note}
      </div>
    </div>
  );
}

export default QuickNote;
