import Book from './book'
import AllBooks from './all_books'
import AddBook from './add_book'
import { useState } from 'react';
function App(){

const [id, onSelect] = useState();


  return (
    <>
      <Book id={id} />
      <AllBooks onSelect={onSelect} />
      <AddBook />
    </>
  );
}

export default App;
