import React, {useState, useEffect } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import MainBooks from './components/MainBooks'
import MoreBooks from './components/MoreBooks'

function App() {
  const [mainBooks, setMainBooks] = useState([])

  useEffect(() => {
    const harry = "https://www.googleapis.com/books/v1/volumes?q=harry+potter";
    const sherlock = "https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes";

    async function fetchData() {
      try {
        let responses1 = await fetch(harry)
        let responses2 = await fetch(sherlock)

        let data1 = await responses1.json()
        let data2 = await responses2.json()

        let books = [...data1.items, ...data2.items]
        setMainBooks(books)

      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[]);

console.log(mainBooks)

  return (
    <div>
      <Navbar/>
      {mainBooks && <MainBooks books={mainBooks}/>}
      {mainBooks && <MoreBooks books={mainBooks}/>}
    </div>
  )
}

export default App