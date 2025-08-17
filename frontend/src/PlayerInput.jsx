import TextareaAutosize from 'react-textarea-autosize';
import Narration from './Narration'; 

function PlayerInput({loading, players, onPlayerChange, onAddPlayer, onRemovePlayer, narration }) {
    return (
        <div>
            {players.map((player, index) => (
                <div key={index} className="flex items-start mb-2 ">
                    <TextareaAutosize
                        minRows={1}
                        maxRows={5}
                        placeholder="Name"
                        value={player.name}
                        onChange={(e) => onPlayerChange(index, 'name', e.target.value)}
                        disabled={loading}
                        className="flex w-full px-1 py-2 mr-2 border rounded bg-blue-300 text-gray-900"
                    />
                    <TextareaAutosize
                        minRows={1}
                        maxRows={5}
                        placeholder="Strategy"
                        value={player.strategy}
                        onChange={(e) => onPlayerChange(index, 'strategy', e.target.value)}
                        className="flex w-full px-1 py-2 border rounded bg-green-100 text-gray-900"
                        disabled={loading}
                    />
                    {!loading && !narration && (
                        <button
                            onClick={() => onRemovePlayer(index)}
                            className="ml-2 bg-red-700 hover:bg-red-300 text-black px-3 py-2 rounded shadow-lg transition duration-500 ease-in-out hover:scale-105"
                        >
                            X
                        </button>
                        )}
                    
                    {loading && !narration && (
                        <span className="ml-2 text-green-500">🟢</span>
                    )}
                    {!loading && narration && (
                        players[index].isAlive ? (
                            <span className="ml-2 text-green-500">🟢</span>
                        ) : (
                            <span className="ml-2 text-red-500">💀</span>
                        )
                    )}


                </div>
            ))}
            {!loading && (
            <button onClick={onAddPlayer}
            className="px-5 py-2 bg-white text-green-400 rounded shadow-2xl hover:text-amber-400 hover:bg-green-400 transition duration-700">Add Player</button>
            )}
        </div>
    );
}

export default PlayerInput;
