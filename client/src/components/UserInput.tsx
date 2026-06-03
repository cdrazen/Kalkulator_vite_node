import React, { useState } from 'react';

// 1. Dohvaćamo varijablu iz okruženja (Vite koristi import.meta.env)
// Ako varijabla ne postoji (npr. lokalno na PC-u), automatski koristi localhost
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const UserInput: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [status, setStatus] = useState('');

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText) return;

    try {
      // 2. Zamjenjujemo hardkodirani URL s dinamičkim URL-om
      const response = await fetch(`${API_URL}/api/save`, {
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