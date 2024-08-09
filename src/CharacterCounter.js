import React, { useState } from 'react';

function CharacterCounter() {
    const [inputString, setInputString] = useState('');
    const [charCounts, setCharCounts] = useState({});

    const handleInputChange = (event) => {
        const input = event.target.value;
        setInputString(input);

        const counts = {};
        for (let char of input) {
            counts[char] = (counts[char] || 0) + 1;
        }
        setCharCounts(counts);
    };

    return (
        <div>
            <h2>Character Counter</h2>
            <input
                type="text"
                value={inputString}
                onChange={handleInputChange}
                placeholder="Enter a string"
            />
            <div>
                <h3>Character Counts:</h3>
                <ul>
                    {Object.entries(charCounts).map(([char, count]) => (
                        <li key={char}>
                            {char === ' ' ? 'Space' : char}: {count}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CharacterCounter;