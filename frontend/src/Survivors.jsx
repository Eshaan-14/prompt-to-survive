import { useEffect, useState } from 'react';

function normalizeName(name) {
  return name.trim().toLowerCase();
}

function parseSurvivors(text) {
  const key = 'survivors';
  const lowerText = text.toLowerCase();
  const index = lowerText.indexOf(key);

  if (index === -1) return [];

  let survivorsStr = text.substring(index + key.length).trim();

  
  survivorsStr = survivorsStr.replace(/^[:*\s-]+/, '');


  if (survivorsStr.toLowerCase().includes('no players survived')) {
    return [];
  }


  const lines = survivorsStr
    .split('\n')
    .map(line => line.replace(/^[-*\s]+/, '').trim()) // remove "- " or "* "
    .filter(Boolean);

  
  if (lines.length === 1 && lines[0].includes(',')) {
    return lines[0].split(',').map(s => s.trim()).filter(Boolean);
  }

 
  return lines;
}


export default function Survivors({ players, survivorsText, setPlayers, narrationDone }) {
  useEffect(() => {
     console.log('survivorsText received in Survivors component:', survivorsText);
    if (!survivorsText || !narrationDone) return;
    console.log('SurvivorsText:', survivorsText);

    const survivors = parseSurvivors(survivorsText);

    console.log('Parsed survivors:', survivors);
    const normalizedSurvivors = survivors.map(normalizeName);
    console.log('Normalized survivors:', normalizedSurvivors);

   setPlayers(prevPlayers =>
    prevPlayers.map(player => {
      const alive = normalizedSurvivors.includes(normalizeName(player.name));
      console.log(`Player: ${player.name}, Alive?`, alive);
      return { ...player, isAlive: alive };
    })
  );
}, [survivorsText, setPlayers, narrationDone]);
}
