import './App.css';
import { useState, useEffect } from 'react';
import firebase from './firebase';

function App() {
  const [books, setBooks] = useState([])
  //anytime you have user input; set it in a userinput state
  const [userInput, setUserInput] = useState('')

  //tell react to update our userInput state to equal whatever the user types in the input field 
  const handleChange = function(event){
   setUserInput(event.target.value)
  }
  //could also do a slick 
  const handleSubmit = function(event){
    event.preventDefault()
    const dbRef = firebase.database().ref()
    dbRef.push(userInput)
    //to clear out once you click submit
    setUserInput('')

  }


  useEffect(function(){
    //make reference to our database 
    const dbRef = firebase.database().ref()

    //add event listener to watch for changes to our database 
    dbRef.on('value', function(response){
    //varialbe to store new state 
    const newState = []
    const data = response.val()
    //iterate through the data object
    for (let property in data){
      //push each book name into the new array 
      newState.push({
        bookTitle: data[property], 
        bookID: property, 
      })
    } 
      setBooks(newState)
    })

  }, [])

  const removeBook = function(whatToRemove){
    const dbRef = firebase.database().ref()
    // use two new firebase methods to remove an item 
    dbRef.child(whatToRemove).remove()
  }


  return (
    <div className="App">
      <h1>Elf on the Book Shelf!</h1>
      <ul>
        {
          books.map( book => {
            return (
              <li key={book.bookID}>
                <p>{book.bookTitle}</p>
                <button onClick = {function(){removeBook(book.bookID)}}>Remove</button>
              </li>
            )
          })
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newBook">Add a new book to your shelf!</label>
        <input id="newBook" type="text" onChange={handleChange}/>
        <button >Add Book</button>
      </form>
    </div>
  );
}

export default App;
