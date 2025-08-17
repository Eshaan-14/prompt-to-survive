

function Scenario({loading, scenario, onChange })
{
    return (
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-200  mb-2">Scenario:</label>
                <textarea
                    value={scenario}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Describe the scenario here..." 
                    rows="4"
                    cols="50"
                    className="flex w-full p-2 border  bg-blue-50 rounded text-gray-900"
                    disabled={loading}
                />
            </div>
        
    );
}

export default Scenario;