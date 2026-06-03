import React, { useState } from 'react';

const UserInput: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [status, setStatus] = useState('');

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText) return;

    try {
      const response = await fetch('http://localhost:3001/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputText }),
      });

      if (response.ok) {
        setStatus('Podaci uspješno spremljeni!');
        setInputText('');
      } else {
        setStatus('Greška pri spremanju podataka.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setStatus('Nije moguće kontaktirati server.');
    }
  };

  return (
    <div className="user-input">
      <h3>Spremi Bilješku na Disk</h3>
      <form onSubmit={handleSave}>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Unesite nešto za spremanje..."
        />
        <br />
        <button type="submit">Spremi u datoteku</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default UserInput;
