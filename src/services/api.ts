const API_URL = 'http://localhost:3000';

export const fetchMenuItems = async (): Promise<string[]> => {
    const response = await fetch(`${API_URL}/menu`);
    const data = await response.json();
    return data.items;
};

export const fetchSafeItems = async (allergen: string): Promise<string[]> => {
    const response = await fetch(`${API_URL}/safe-items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ allergen }),
    });
    const data = await response.json();
    return data.items;
};
