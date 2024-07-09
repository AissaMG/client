// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
    const [shareId, setShareId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Générer un ID de partage unique (ici on utilise une valeur fixe pour la démo)
        setShareId('12345');
    };

    return (
        <div className="App">
            <h1>Créer un lien partageable</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">Générer un lien</button>
            </form>
            {shareId && (
                <div>
                    <h2>Lien de partage :</h2>
                    <a href={`/share/${shareId}`} target="_blank" rel="noopener noreferrer">
                        {window.location.origin}/share/{shareId}
                    </a>
                </div>
            )}
        </div>
    );
}

export default App;
