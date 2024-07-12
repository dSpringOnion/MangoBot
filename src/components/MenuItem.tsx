import React from 'react';

interface MenuItemProps {
    name: string;
    allergens: string[];
}

const MenuItem: React.FC<MenuItemProps> = ({ name, allergens }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Allergens: {allergens.join(', ')}</p>
        </div>
    );
};

export default MenuItem;
