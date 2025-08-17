import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
const app = express();
app.use(cors());
app.use(express.json());

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend build
app.use(express.static(path.resolve(__dirname, '../frontend/dist')));

// Handle React routes safely
app.get(/^\/.*$/, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
});



const client = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY, // API key
});

app.post('/play-round', async (req, res) => {
    try {
        const {scenario, players} = req.body;
        const prompt= `You are an AI game master in a game called Death by AI. 
        ### INSTRUCTIONS:
        - Keep the narration concise (under 300 words).
        - Skip introductions like "Welcome contestants".
        - Focus only on the current scenario and player actions.
        - Conclude with a clear list of survivors.
        - Make it funny and engaging.
        - Add twists to the scenario.
        Scenario:  ${scenario}
        Players and their strategies:
        ${players.map(p => `- ${p.name}: ${p.strategy}`).join('; ')}
        If you get empty input, mention that everyone is dead.
        ### OUTPUT FORMAT:
        - Narration: The narration of the round.
        - Survivors: List of players who survived this round.
        ## Example:
        Scenario: A zombie apocalypse in a mall.
        Players and their strategies:
        - Alice: Hiding in a store.
        - Bob: Fighting zombies with a baseball bat.
        Narration: Alice and Bob find themselves in a mall overrun by zombies. Alice hides in a clothing store, while Bob bravely fights off zombies with his baseball bat. Just when it
        seems like Bob is overwhelmed, Alice throws a mannequin at the zombies, creating a distraction. They both escape through the food court, laughing at the absurdity of it all.
        Survivors: Alice, Bob.
        If it is empty, return "No players survived this round."
        Narrate the scene and decide who survives.  Return the narration and list of survivors.`;  

        const result = await client.models.generateContent({
            model: 'gemini-2.5-pro',
            contents: [
                {
                    role: 'user',
                    text: prompt,
                },
            ],

        });
        res.json({ narration: result.text});
    
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({error: 'Failed to generate content'});
    }
});

const PORT= process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
