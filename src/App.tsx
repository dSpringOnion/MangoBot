import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import Contact from './pages/Contact';
import Allergens from './components/Allergens';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/allergens" element={<Allergens />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
