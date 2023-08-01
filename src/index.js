import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client'
import "./index.scss"

// function Greeting() {
//     // return <h1 > My First Component </h1>
//     // return <h1 id="hello" className="classsname"></h1>
// //    return(

// //     <section>
// //         <div>
// //             <h3>hello people</h3>
// //             <ul>
// //                 <li>
// //                     <a href="#">hello world</a>
// //                 </li>
// //             </ul>
// //         </div>
// //         <h2>hello world</h2>
// //     </section>
// //    )
//     return (
//         <>
//         <Person />
//         <Message />
//         </>
//     )
// }
// const Person = () =>  <h2>john doe</h2>
// const Message = () =>{
//     return <p>this is my message</p>
// }


// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<Greeting></Greeting>)
// export default Greeting;

const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL600_SR600,400_.jpg',
}

const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
}

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL600_SR600,400_.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]



// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} job='developer'/>
//       <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} job='developer'/>
//       <Book title='random title' number={22}/>
//       {/* <Book />
//       <Book /> */}
//     </section>
//   );
// }

// - everything we render between component tags
// - during the course we will mostly use it Context API
// - special prop, has to be "children"
// - can place anywhere in JSX

// ```js
function BookList() {
  return (
    <section className='booklist'>
      <EventExamples/>
      {books.map((book)=>{
        // const {img, title, author, id} = book
        return (

          <Book {...book} key={book.id} ></Book>
      )})}
    </section>
  );
}

const EventExamples = () => {

  const handleFormInput = (e) => {
    console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.value)
    console.log('handle form input')
   }

   const handleBtn  = () => {
      alert('handle Btn Click')
    }

  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('Form submitted')
    }

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name='product'
          onChange={handleFormInput}
          style={ {margin: '1rem 0'}}
        />
      </form>
      <button onClick={handleBtn}>Click Me</button>
    </section>
  )
 }

const author = 'Jordan Moore'
const title = 'Interesting Facts For Curious Minds'
const img = './images/book-1.jpg'


const Book = ({img, title, author, children}) => {
  return (
    <article className='book'>

      {/* <Image />
      <Title />
      <Author /> */}
    <img src={img} alt={title}></img>
    <h2>{title}</h2>
    <h4>{author}</h4>
    {children}
        {/* <p>{props.job}</p>
        <p>{props.number}</p> */}
    </article>
  );
};

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
