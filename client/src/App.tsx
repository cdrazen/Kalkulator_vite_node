import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Calculator from './components/Calculator'
import UserInput from './components/UserInput'

function App() {
  const [user, setUser] = useState<string | null>(null)

  const handleLogin = (username: string) => {
    setUser(username)
  }

  const handleLogout = () => {
    setUser(null)
  }

  if (!user) {
    return (
      <div className="app-container">
        <h1>Dobrodošli</h1>
        <Login onLogin={handleLogin} />
      </div>
    )
  }

  return (
    <div className="app-container">
      <header>
        <h1>Pozdrav, {user}!</h1>
        <button className="logout-btn" onClick={handleLogout}>Odjava</button>
      </header>
      <main>
        <div className="dashboard">
          <section className="calc-section">
            <h2>Kalkulator</h2>
            <Calculator />
          </section>
          <hr />
          <section className="input-section">
            <UserInput />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
