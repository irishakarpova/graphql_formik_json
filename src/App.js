import Book from './book'
import AllBooks from './all_books'
import AddBook from './add_book'
import { useState } from 'react';
import Modal from './modal'
import './modal.css'
function App(){

const [id, onSelect] = useState();
const [isOpen, setIsOpen] = useState(false)

const handleClick = () =>{
  setIsOpen(!isOpen)
}


  return (
    <>
      <button onClick={handleClick}>{isOpen ? "close" : "open"}</button>
      {isOpen ? 
        <Modal isOpen={isOpen}> <div className='bg'></div></Modal> 
        : null }
      {/* <Book id={id} />
      <AllBooks onSelect={onSelect} />
      <AddBook /> */}
    </>
  );
}

export default App;
