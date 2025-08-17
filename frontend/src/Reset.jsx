function Reset({ setNarration, setDisplayText, setNarrationDone }) {
    return (
        <button
            onClick={() => {
                setNarration('');
                setDisplayText('');
                setNarrationDone(false);
            }}
            className="mt-4 px-4 py-2 bg-purple-500 hover:bg-pink-400 text-white hover:text-purple-900 rounded shadow"
        >
            🔄 Reset Game
        </button>
    )
    
}

export default Reset;