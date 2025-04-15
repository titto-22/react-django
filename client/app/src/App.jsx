import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState(0)

  useEffect(() => {
    fetchBooks();
  }, []);


  const fetchBooks = async () => {
    try {
      const response =  await fetch('http://127.0.0.1:8000/api/books/');
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>

      <h1>Book website </h1>

      <div>
        <input type="text" placeholder="Book Title..." />
        <input type="number" placeholder="Release year..." />
        <button> Add Book </button>
      </div>
      {books.map((book) => (
        <div>
          <p>Title: {book.bookTitle}</p>
          <p>Release Year: {book.release_year}</p>

      </div>
      ))}
    </>
  );
}

export default App
