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
      name: 'fhjdkfjndhjfikldnfdiana',
      price: 210,
      amount: 1
    },
  ]);
  const [cart, setCart] = useState([]);
  const [errorMsg, setErrorMsg] = useState("")
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(0)
  const onClickButtonFunc = (book) => {
    if (balance - book.price >= 0) {
      if (book.amount > 0) {
        books[books.indexOf(book, 0)].amount -= 1
        setBalance(balance - book.price)
        setErrorMsg("")
        var newCart = []
        var fl = true
        setCount(count + 1)
        setPrice(price + book.price)
        for (var i = 0; i < cart.length; i++) {
          if (cart[i].id === book.id) {

            newCart.push(cart[i])
            newCart[i].buyCnt += 1
            fl = false
          }
          else {
            newCart.push(cart[i])
          }
        }
        if (fl) {
          console.log(1)
          newCart.push({ id: book.id, price: book.price, name: book.name, buyCnt: 1 })
        }
        setCart(newCart)
      }
      else {
        setErrorMsg("У нас больше нет этой книги в наличии")
      }
    }
    else {
      setErrorMsg("Цена книги превышает ваш баланс")
    }
  }

  return (
    <div className="app">
      <header className="header">
      </header>
      {errorMsg !== ""
        ? <p>{errorMsg}</p>
        : <div></div>
      }

      <div className="shop">
        <AsideInfo balance={balance} cart={cart} count={count} price={price} />
        <BooksList books={books} onClickButtonFunc={onClickButtonFunc} />
      </div>

      <footer className="footer">
      </footer>

    </div>
  );
}

export default App;
