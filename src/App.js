import React from 'react';
import AsideInfo from './components/AsideInfo';
import BooksList from './components/BooksList';
import "./static/css/main.css"
import { useState } from 'react'
function App() {
  const [balance, setBalance] = useState(1000);
  const [books, setBooks] = useState([
    {
      id: 1,
      name: 'Совершенный код. Мастер-класс',
      price: 100,
      amount: 3
    },
    {
      id: 2,
      name: 'Rapid Development, Steve McConnell',
      price: 180,
      amount: 2
    },
    {
      id: 3,
      name: 'Искусство программирования, Д.Кнут',
      price: 210,
      amount: 1
    },
    {
      id: 4,
      name: 'fhjdkfjndhjfikldnfdiana',
      price: 210,
      amount: 1
    },
    {
      id: 5,
      name: 'fhjdkfjndhjfikldnfdiana',
      price: 210,
      amount: 1
    },
    {
      id: 6,
      name: 'fhjdkfjndhjfikldnfdiana',
      price: 210,
      amount: 1
    },
    {
      id: 7,
      name: 'fhjdkfjndhjfikldnfdiana',
      price: 210,
      amount: 1
    },
    {
      id: 8,
      name: 'fhjdkfjndhjfikldnfdiana',
      price: 210,
      amount: 1
    },
    {
      id: 9,
      name: 'fhjdkfjndhjfikldnfdiana',
      price: 210,
      amount: 1
    },
    {
      id: 10,
      name: 'fhjdkfjndhjfikldnfdiana',
      price: 210,
      amount: 1
    },
    {
      id: 11,
      name: 'fhjdkfjndhjfikldnfdiana',
      price: 210,
      amount: 1
    },
    {
      id: 12,
      name: 'Джедайские техники - Максим Дорофеев',
      price: 210,
      amount: 1
    },
    {
      id: 13,
      name: 'fhjdkfjndhjfikldnfdiana',
      price: 210,
      amount: 1
    },
    {
      id: 14,
      name: 'fhjdkfjndhjfikldnfdiana',
      price: 210,
      amount: 1
    },
  ]);
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
