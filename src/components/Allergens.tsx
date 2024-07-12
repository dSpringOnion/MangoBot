import React, { useEffect, useState } from 'react';
import { fetchSafeItems } from '../services/api';

const Allergens: React.FC = () => {
    const [allergen, setAllergen] = useState<string>('');
    const [safeItems, setSafeItems] = useState<string[]>([]);

    const handleSearch = () => {
        fetchSafeItems(allergen).then(items => setSafeItems(items));
    };

    return (
        <div>
            <h1>Allergen Safe Items</h1>
            <input
                type="text"
                value={allergen}
                onChange={(e) => setAllergen(e.target.value)}
                placeholder="Enter an allergen"
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {safeItems.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Allergens;
