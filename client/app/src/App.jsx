import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>

      <h1>Book website </h1>

      <div>
        <input type="text" placeholder="Book Title..." />
        <input type="number" placeholder="Release Date..." />
        <button> Add Book </button>
      </div>
    </>
  );
}

export default App
