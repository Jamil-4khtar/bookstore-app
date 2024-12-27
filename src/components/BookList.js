import React from "react";

const BookList = ({ books, onSelect, loading, error }) => {
    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="books-grid">
            {books.map((book) => (
                <div
                    key={book.id}
                    className="book-card"
                    onClick={() => onSelect(book)}
                >
                    <img
                        src={book.volumeInfo.imageLinks?.thumbnail || '/api/placeholder/200/300'}
                        alt={book.volumeInfo.title}
                        className="book-cover"
                    />
                    <div className="book-info">
                        <h3 className="book-title">{book.volumeInfo.title}</h3>
                        <p className="book-author">
                            {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookList