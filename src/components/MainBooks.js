import React from 'react'
import "../styles/MainBooks.css"

function MainBooks({ books }) {
    console.log(books)


    const topThreeBooks = books.slice(0, 3);

    return (
        <div className="main-books-container">
            {topThreeBooks.map((item, index) => (
                <div key={item.id} className="book-item">
                    <img src={item.volumeInfo.imageLinks.smallThumbnail} alt={item.volumeInfo.title} />
                    <h2>{item.volumeInfo.title}</h2>
                    <p>{item.volumeInfo.authors}</p>
                    <p>{item.volumeInfo.description}</p>
                </div>
            ))}
        </div>
    );
}

export default MainBooks