import React from 'react';
import AsideInfo from './components/AsideInfo';
import BooksList from './components/BooksList';
import "./static/css/main.css"
import { useState } from 'react'
import { DataBooks, DataBalance } from './data';
function App() {

  const [balance, setBalance] = useState(DataBalance);
  const [books, setBooks] = useState(DataBooks);
  const [errorMsg, setErrorMsg] = useState("")
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(0)


  const onClickButtonFunc = (book) => {
    if (balance - book.price >= 0) {
      if (book.amount > 0) {
        books[books.indexOf(book, 0)].amount -= 1
        setBalance(balance - book.price)
        setErrorMsg("")
        setCount(count + 1)
        setPrice(price + book.price)
      }
    }
    else {
      setErrorMsg("Недостаточно средст на балансе")
    }
  }

  return (
    <div className="app">
      <header className="header">
      </header>
      <div className="shop">
        <AsideInfo balance={balance} count={count} price={price} errorMsg={errorMsg} />
        <BooksList books={books} onClickButtonFunc={onClickButtonFunc} />
      </div>

      <footer className="footer">
      </footer>

    </div>
  );
}

export default App;
