const BookDetail = ({ book, onClose }) => {
    const { volumeInfo } = book;

    return (
        <div className="book-detail">
            <div className="detail-content">
                <img
                    src={volumeInfo.imageLinks?.thumbnail || '/api/placeholder/300/450'}
                    alt={volumeInfo.title}
                    className="detail-image"
                />
                <div className="detail-info">
                    <h2 className="detail-title">{volumeInfo.title}</h2>
                    <p className="detail-author">
                        by {volumeInfo.authors?.join(', ') || 'Unknown Author'}
                    </p>
                    <p className="detail-description">{volumeInfo.description}</p>
                    <div className="detail-actions">
                        <a
                            href={volumeInfo.previewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button primary"
                        >
                            Read Now
                        </a>
                        <a
                            href={volumeInfo.infoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button secondary"
                        >
                            More Info
                        </a>
                        <button onClick={onClose} className="button">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail