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
        <section className="mb-4 p-4 bg-gray-800 rounded">
        <h2 className="text-yellow-400 font-semibold mb-2">How to Play</h2>
        <p className="text-sm text-gray-300">
          Enter a scenario and add players with their strategies. Then hit "Play Round" to see how your players survive the scenario, narrated by the AI game master. Have fun!
        </p>
      </section>
        <GameRound />
      </main>
    </div>
  );
}

export default App;
