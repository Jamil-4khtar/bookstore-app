import React from 'react'

function MoreBooks({books}) {
    return (
        <div>
            { books && books.map((item) => (
                <div key={item.id}>
                    <img src={item.volumeInfo.imageLinks.smallThumbnail} alt={item.volumeInfo.title} />
                    <h2>{item.volumeInfo.title}</h2>
                    <p>{item.volumeInfo.authors}</p>
                    <p>{item.volumeInfo.description}</p>
                    <p>{item.volumeInfo.description}</p>

                </div>
            ))}
        </div>
    )
}

export default MoreBooks