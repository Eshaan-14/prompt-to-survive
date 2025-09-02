
# Prompt to Survive

A web-based party game where players try to survive absurd AI-generated scenarios.  
Players submit their strategies, and the AI decides who survives each round with a funny narration.

## Features

- React frontend styled with Tailwind CSS
- Node.js/Express backend with OpenAI integration
- Add custom scenarios and player strategies
- AI narrates each round and lists survivors
- Typing sound effect for narration reveal

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/eshaan-14/prompt-to-survive.git
   cd prompt-to-survive
````

2. **Install dependencies:**

   ```sh
   cd death-by-ai/frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Configure environment variables:**

   * In `backend`, create a `.env` file with your OpenAI API key:

     OPENAI_API_KEY=your_openai_key_here






### Running the App

1. **Start the backend:**

   ```sh
   cd death-by-ai/backend
   npm run dev
   ```

   (or `npm start` if not using nodemon)

2. **Start the frontend:**

   ```sh
   cd death-by-ai/frontend
   npm run dev
   ```

   The frontend will be available at [http://localhost:5173](http://localhost:5173).

### Usage

* Enter a scenario (e.g., "A zombie apocalypse in a mall").
* Add players and their strategies.
* Click "Play Round" to let the AI narrate and decide survivors.
* Reset to play again with new scenarios.

### Project Structure

```
death-by-ai/
├── backend/
│   ├── index.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── GameRound.jsx
│   │   ├── PlayerInput.jsx
│   │   ├── Scenario.jsx
│   │   ├── Narration.jsx
│   │   ├── Survivors.jsx
│   │   ├── Reset.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
└── README.md
```



### Customization

* **Styling:** Edit `frontend/src/index.css` and use Tailwind utility classes in your components.
* **Backend prompt:** Modify the prompt in `backend/index.js` to change AI behavior.

### Troubleshooting

* If you see a blank page, check your browser console for errors (e.g., using `class` instead of `className` in React).
* Ensure both frontend and backend servers are running.
* Make sure your OpenAI API key is valid.

### License

MIT

---

### Deployment on Render

To deploy on Render, set your environment variable `OPENAI_API_KEY` in the Render dashboard under your service settings.

Update your README usage section with your Render app link:

Example:

**Live Demo:** [https://your-render-app.onrender.com](https://your-render-app.onrender.com)

---

Enjoy surviving (or not) in Death by AI!


