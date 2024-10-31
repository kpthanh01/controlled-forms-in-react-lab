import { useState } from "react"

const Bookshelf = (props) => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ])
  const [newBook, setNewBook] = useState({
    title: '',
    author: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    setBooks([...books, newBook])
    setNewBook({
      title: '',
      author: ''
    })
  }

  const handleChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value })
  }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" value={newBook.title} onChange={handleChange} />
          <label htmlFor="author">Author:</label>
          <input type="text" name="author" id="author" value={newBook.author} onChange={handleChange} />
          <button>Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((item, index) => (
          <div className="bookCard" key={index}>
            <p>{item.title}</p>
            <p>{item.author}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Bookshelf