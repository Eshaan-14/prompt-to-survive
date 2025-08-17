import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import GameRound from './GameRound.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <header className="flex items-center justify-center gap-6 p-4 border-b border-gray-700">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1 className="text-3xl md:text-4xl font-bold hover:text-red-500 transition duration-500 ease-in-out hover:scale-105">
          Prompt to Survive
        </h1>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>

      <main className="flex-grow p-6 max-w-4xl mx-auto space-y-6">
        <p className="text-center text-gray-300 text-lg md:text-xl">
          Survive using only your prompts
        </p>

        <div className="text-center">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="btn bg-blue-600 hover:bg-blue-700 text-black font-semibold px-6 py-2 rounded transition"
          >
            count is {count}
          </button>
        </div>

        <GameRound />
      </main>
    </div>
  );
}

export default App;
