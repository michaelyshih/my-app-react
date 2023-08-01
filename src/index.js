import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client'
import "./index.scss"
import books from './books'
import Book from './Book'

// ```js
function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />
        })}
      </section>
    </>
  )
}


const author = 'Jordan Moore'
const title = 'Interesting Facts For Curious Minds'
const img = './images/book-1.jpg'

const Image = () => (
  <img
    src={img}
    alt={title}

  />
)
const Title = () => {
  return <h2>American Prometheus: The Triumph</h2>
};
const Author = () => <h4 style={
    {color: '#617d98',
    fontSize: '0.78rem',
    marginTop: '0.5rem',
    letterSpacing: '2px',
    }
    // can also be saved in var and passed in as obj
} >{author.toUpperCase()}</h4>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
