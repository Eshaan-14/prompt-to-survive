import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Scenario  from './Scenario.jsx';
import PlayerInput from './PlayerInput.jsx';
import Narration from './Narration.jsx';
import typeSound from './assets/typing.mp3'; 
import Survivors from './Survivors.jsx';
import Reset from './Reset.jsx';


function GameRound() {
    const [scenario, setScenario] = useState('');
    const [players, setPlayers] = useState([{ name: '', strategy: '', isAlive: true }]);
    const [narration, setNarration] = useState('');
    const [loading, setLoading] = useState(false);
    const [narrationDone, setNarrationDone] = useState(false);


    const handlePlayerChange = (index, field, value) => {
        const newPlayers = [...players];
        newPlayers[index][field] = value;
        setPlayers(newPlayers);
    };

    const addPlayer = () => {
        setPlayers([...players, { name: '', strategy: '', isAlive: true }]);
    }

    const removePlayer = (index) => {
        const newPlayers = players.filter((_, i) => i !== index);
        setPlayers(newPlayers);
    }
    const [displayText, setDisplayText] = useState('');

    const [survivorsText, setSurvivorsText] = useState('');

    const playRound = async () => {
        setPlayers(prev => prev.map(p => ({ ...p, isAlive: true })));
        setLoading(true);
        try {
            const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/play-round`;

            const response = await axios.post(backendUrl, {
                scenario,
                players
            });
            setDisplayText('');
            setSurvivorsText(response.data.survivors || '');
            setNarration(response.data.narration);
        } catch (error) {
            console.error('Error playing round:', error);
            setNarration('Failed to generate narration.');
            setSurvivorsText('No players survived this round.');
        } finally {
            setLoading(false);
        }
    };
    


    useEffect(() => {
    let index = 0;
    const speed = 30; 
    let typingInterval;
    const audio = new Audio(typeSound);
    audio.volume = 0.2; 
    setNarrationDone(false);
    setDisplayText('');
    if (narration) {
        typingInterval = setInterval(() => {
            setDisplayText((prev) => prev + narration.charAt(index));

           
            if (narration.charAt(index) !== ' ' && index % 20 === 0) {
                try {
                  
                    const tick = audio.cloneNode();
                    tick.play();
                } catch (err) {
                    console.error('Audio play error:', err);
                }
            }

            index++;
            if (index >= narration.length) {
            clearInterval(typingInterval);
            setNarrationDone(true);  // <-- only now, after finishing
            }
        }, speed);
    }

    return () => clearInterval(typingInterval); 
}, [narration]);

    return (
        <div className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-blue-200">
            <h1 className="text-red-500">Game Round</h1>
            <Scenario scenario={scenario} onChange={setScenario} loading={loading}/>
            <br />
                
            
            <PlayerInput 
                players={players} 
                onAddPlayer={addPlayer}
                onRemovePlayer={removePlayer}
                onPlayerChange={handlePlayerChange}
                loading={loading}
                narration={narration}
            />
            <br />
            <Narration loading={loading} playRound={playRound} narration={displayText} />
            <Survivors players={players} survivorsText={narration} setPlayers={setPlayers} narrationDone={narrationDone}/>
            <Reset setDisplayText={setDisplayText} setNarrationDone={setNarrationDone} setNarration={setNarration} />
        </div>
    );
}

export default GameRound;