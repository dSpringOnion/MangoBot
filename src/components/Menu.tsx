import React, { useEffect, useState } from 'react';
import { fetchMenuItems } from '../services/api';

const Menu: React.FC = () => {
    const [menuItems, setMenuItems] = useState<string[]>([]);

    useEffect(() => {
        fetchMenuItems().then(items => setMenuItems(items));
    }, []);

    return (
        <div>
            <h1>Our Menu</h1>
            <ul>
                {menuItems.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
