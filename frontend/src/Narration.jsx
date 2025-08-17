function Narration ({loading, playRound, narration}){
    return (
        <div className="flex flex-col items-center justify-center mt-4">  
        <button onClick={playRound}
                disabled={loading}
                className=" text-2xl hover:bg-green-400 hover:text-white transition duration-700 px-5 py-2 text-green-400 bg-white rounded shadow-2xl"
            >
                
                {loading ? 'Thinking..' : 'Play Round'}
            </button>
             <h3 className="text-pink-100 text-center mt-4">Narration:</h3>
            <div className="mt-4 bg-white p-4 rounded shadow-lg text-black">

                <p className="bg-amber-10">{narration || 'No narration yet.'}</p>
            </div>
        </div>
    );
}
export default Narration;