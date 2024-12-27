import React, {useState, useEffect} from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import BookDetail from './components/BookDetails';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = async (query) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    if (!response.ok) throw new Error('Failed to fetch books');
    return response.json();
  };

  useEffect(() => {
    const loadInitialBooks = async () => {
      try {
        setLoading(true);
        const [harryPotterBooks, sherlockBooks] = await Promise.all([
          fetchBooks('harry+potter'),
          fetchBooks('sherlock+holmes')
        ]);

        setBooks([...harryPotterBooks.items, ...sherlockBooks.items]);
      } catch (err) {
        setError('Failed to load books');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadInitialBooks();
  }, []);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const data = await fetchBooks(query);
      setBooks(data.items || []);
    } catch (err) {
      setError('Search failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar onSearch={handleSearch} />
      <main className="main-content">
        {selectedBook ? (
          <BookDetail book={selectedBook} onClose={() => setSelectedBook(null)} />
        ) : (
          <BookList
            books={books}
            onSelect={setSelectedBook}
            loading={loading}
            error={error}
          />
        )}
      </main>
    </div>
  );
};

export default App