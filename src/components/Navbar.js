import React, { useState} from 'react'
import "../styles/Navbar.css"
const Navbar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <img src="/api/placeholder/40/40" alt="KeazoN Books" className="nav-logo" />
                <span className="nav-title">KeazoN Books</span>
            </div>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for books..."
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </nav>
    );
};

export default Navbar